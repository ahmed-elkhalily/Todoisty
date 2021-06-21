import { useState, useEffect } from 'react';
import moment from 'moment';
import firestore from '../firebase';
import collatedTaskExists from '../helpers/index';

// getTasks custom HOOKs
export const useTask = (selectedProject) => {
  // setState HOOKS
  const [tasks, setTasks] = useState([]);
  const [archived, setArchived] = useState([]);
  // useEffect HOOKS
  useEffect(() => {
    let unsubscribe = firestore.collection('tasks').where('userId', '==', 'gJTCIqlYbKlfjHJFvcRT');

    unsubscribe =
      selectedProject && !collatedTaskExists(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'today'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('dd/mm/yyyy')))
        : selectedProject === 'inbox' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', '')) // where("projectid", "==", "0")
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchived(newTasks.filter((task) => task.archived === true));
    });
    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archived };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // effect
    const unsubscribe = firestore
      .collection('projects')
      .where('userId', '==', 'gJTCIqlYbKlfjHJFvcRT')
      .orderBy('projectId')
      .onSnapshot((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          id: project.id,
          ...project.data(),
        }));
        // check to change state
        if (JSON.stringify(projects) !== JSON.stringify(allProjects)) {
          setProjects(allProjects);
        }
      });
    // clear
    return () => unsubscribe();
  }, [projects]);

  return { projects, setProjects };
};
