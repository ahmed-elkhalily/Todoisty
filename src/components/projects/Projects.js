import React from 'react';
import { UseSelectedProjectValue } from '../../context';
import IndividualProject from '../indvdl/IndividualProject';
import './projects.scss';

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
