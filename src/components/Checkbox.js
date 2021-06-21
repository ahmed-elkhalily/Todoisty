import React from 'react';
import firestore from '../firebase';

const CheckBox = ({ id }) => {
  const ArchivedAction = () => {
    firestore.collection('tasks').doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="chekbox__holder"
      onClick={() => ArchivedAction()}
      role="button"
      tabIndex={0}
      onKeyPress={() => ArchivedAction()}
    >
      <span className="checkbox" />
    </div>
  );
};
export default CheckBox;
