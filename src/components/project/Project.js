import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import firestore from '../../firebase';
import './project.scss';

const Project = ({ project }) => {
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
      <div className="single-project__name">
        <span className="dot">•</span>
        <span className="name">{project.name}</span>
      </div>
      <div
        className="single-project__delete-icon"
        onClick={() => setShowDeleteTab(!showDeleteTab)}
        onKeyDown={() => setShowDeleteTab(!showDeleteTab)}
        role="button"
        tabIndex="0"
      >
        <BsTrash />
      </div>
      <div className={`single-project__delete-confirm ${!showDeleteTab ? 'hidden' : 'show'}`}>
        <p className="message">
          remove <strong>{project.name}</strong> project.
        </p>
        <div>
          <button
            onClick={() => deleteProject(project.id)}
            className="btn btn--remove"
            type="button"
            data-testid="project-delete"
          >
            delete
          </button>
          <button
            className="btn btn--default"
            type="button"
            onClick={() => setShowDeleteTab(!showDeleteTab)}
          >
            cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default Project;
