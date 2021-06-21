import React from 'react';
import { useProjectsValue, UseSelectedProjectValue } from '../../../context';
import IndividualProject from '../../IndividualProject';

const Project = () => {
  const { projects } = UseSelectedProjectValue();
  return (
    <ul>
      {projects &&
        projects.map((project) => (
          <li key={project.id} data-doc-id={project.id} data-testid="project-action">
            <IndividualProject project={project} />
          </li>
        ))}
    </ul>
  );
};
export default Project;
