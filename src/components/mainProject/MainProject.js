import React from 'react';

const MainProject = (props) => {
  const { children, onClickFunction } = props;
  return (
    <li className="sidebar__item">
      <div
        role="button"
        tabIndex="0"
        onClick={() => onClickFunction()}
        onKeyPress={() => onClickFunction()}
      >
        {children}
      </div>
    </li>
  );
};
export default MainProject;
