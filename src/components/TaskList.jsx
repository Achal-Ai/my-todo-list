import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onToggle, onDelete, onSort, sortBy, onClearCompleted, emptyIcon }) => (
  <div className="task-list-container">
    <div className="task-list-header">
      <select value={sortBy} onChange={e => onSort(e.target.value)}>
        <option value="date">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
        <option value="category">Sort by Category</option>
      </select>
      <button className="clear-completed" onClick={onClearCompleted}>Clear Completed</button>
    </div>
    {tasks.length === 0 ? (
      <div className="empty-state">
        {emptyIcon}
        <span>No tasks yet – Add a task to get started</span>
      </div>
    ) : (
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    )}
  </div>
);

export default TaskList;
