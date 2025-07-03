import React from 'react';
import '../styles/Header.css';

const Header = ({ total, completed }) => (
  <header className="header">
    <h1>My To-Do List</h1>
    <p className="subtitle">Stay organized and productive</p>
    <span className="task-counter">{completed}/{total} tasks</span>
  </header>
);

export default Header;
