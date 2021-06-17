import { firestore } from '../../../firebase';

export const CheckBox = ({ id }) => {
  const ArchivedAction = () => {
    firestore.collection('tasks').doc(id).update({
      archived: true,
    });
  };

  return (
    <div className="chekbox__holder" onClick={() => ArchivedAction()}>
      <span className="checkbox" />
    </div>
  );
};
