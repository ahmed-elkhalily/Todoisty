import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import firestore from '../../firebase';
import './individualProject.scss';

const IndividualProject = ({ project }) => {
  const [showDeleteTab, setShowDeleteTab] = useState(false);
  const deleteProject = (projectId) => {
    firestore
      .collection('projects')
      .doc(projectId)
      .delete()
      .then(() => {
        console.log('element has been deleted !!');
      })
      .catch((error) => {
        console.log("there's an error", error);
      });
  };
  return (
    <>
      <span className="ind-project__dot">•</span>
      <span className="ind-project__name">{project.name}</span>
      <span
        className="ind-project__delete"
        onClick={() => setShowDeleteTab(!showDeleteTab)}
        onKeyDown={() => setShowDeleteTab(!showDeleteTab)}
        role="button"
        tabIndex="0"
      >
        <BsTrash />
      </span>
      <div className="ind-project__delete-confirm">
        <div className="ind-project__delete-cancel" />
        <p>confirm delete project</p>
        <div>
          <button
            onClick={() => deleteProject(project.id)}
            className="ind-project__delete-remove"
            type="button"
            data-testid="project-delete"
          >
            delete
          </button>
          <button type="button" onClick={() => sethowDeleteTab(!showDeleteTab)}>
            cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default IndividualProject;
