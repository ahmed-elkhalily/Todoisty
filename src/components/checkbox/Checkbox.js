import React from 'react';
import firestore from '../../firebase';
import './checkbox.scss';

const CheckBox = ({ id }) => {
  const ArchivedAction = () => {
    firestore.collection('tasks').doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="chekbox"
      onClick={() => ArchivedAction()}
      role="button"
      tabIndex={0}
      onKeyPress={() => ArchivedAction()}
    >
      <span className="checkbox__item" />
    </div>
  );
};
export default CheckBox;
