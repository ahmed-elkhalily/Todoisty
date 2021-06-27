import { useState, useEffect } from 'react';
import moment from 'moment';
import firestore from '../firebase';
import collatedTaskExists from '../helpers/index';

// getTasks custom HOOKs
export const useTask = (selectedProject) => {
  // setState HOOKS
  const [tasks, setTasks] = useState([]);
  const [archived, setArchived] = useState([]);
  console.log(selectedProject);
  // useEffect HOOKS
  useEffect(() => {
    let unsubscribe = firestore.collection('tasks').where('userId', '==', 'gJTCIqlYbKlfjHJFvcRT');

    unsubscribe =
      selectedProject && !collatedTaskExists(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('dd/mm/yyyy')))
        : selectedProject === 'INBOX' || selectedProject === 0
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
    firestore
      .collection('projects')
      .where('userId', '==', 'gJTCIqlYbKlfjHJFvcRT')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
