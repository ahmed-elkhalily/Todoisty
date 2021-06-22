import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import './todoBody.scss';

const Body = () => (
  <div className="todo-body">
    <Sidebar />
    <Content />
  </div>
);
export default Body;
