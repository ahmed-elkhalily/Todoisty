import React from 'react';
// context
import { useSelectedProjectValue, useProjectsValue, useTasksContextValues } from '../../context';
// components
import Project from '../project/Project';
import './projects.scss';

const Projects = () => {
  // const { selectedProject, setSelectedProject } = UseSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();
  const { setSelectTasks } = useTasksContextValues();
  // console.log(selectedProject);
  // const selectProject = (projectId) => {};
  // console.log(projects);
  return (
    <ul className="projects">
      {projects &&
        projects.map((project) => (
          <li key={project.docId} data-doc-id={project.id} data-testid="project-action">
            <div
              role="button"
              onClick={() => {
                setSelectedProject(project);
                setSelectTasks(project.projectId);
              }}
              onKeyPress={() => setSelectedProject(project)}
              tabIndex="0"
              className="single-project"
            >
              <Project project={project} />
            </div>
          </li>
        ))}
    </ul>
  );
};
export default Projects;
