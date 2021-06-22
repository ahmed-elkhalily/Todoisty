import React from 'react';
import { UseSelectedProjectValue } from '../../context';
import Project from '../project/project';
import './projects.scss';

const Projects = () => {
  const { projects } = UseSelectedProjectValue();
  return (
    <ul className="projects">
      {projects &&
        projects.map((project) => (
          <li
            className="single-project"
            key={project.id}
            data-doc-id={project.id}
            data-testid="project-action"
          >
            <Project project={project} />
          </li>
        ))}
    </ul>
  );
};
export default Projects;
