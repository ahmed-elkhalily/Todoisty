import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import './body.scss';

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);
export default Body;
