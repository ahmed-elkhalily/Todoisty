import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import firestore from '../firebase';

const IndividualProject = ({ project }) => {
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
      <span>⚫</span>
      <span>{project.name}</span>
      <span
        className="project__delete"
        onClick={() => deleteProject(project.id)}
        onKeyDown={() => deleteProject(project.id)}
        role="button"
        tabIndex="0"
      >
        <FaRegTrashAlt />
      </span>
    </>
  );
};
export default IndividualProject;
