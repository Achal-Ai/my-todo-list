import React from 'react';
import '../styles/TaskList.css';

const priorityColors = {
  Low: '#7ed957',
  Medium: '#f7b801',
  High: '#ff6363',
};

const TaskItem = ({ task, onToggle, onDelete }) => (
  <li className={`task-item${task.completed ? ' completed' : ''}`}
      style={{ borderLeft: `5px solid ${priorityColors[task.priority]}` }}>
    <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-text">{task.text}</span>
    </label>
    <div className="task-meta">
      <span className="category">{task.category}</span>
      <span className="priority">{task.priority}</span>
      {task.dueDate && <span className="due-date">{task.dueDate}</span>}
    </div>
    <button className="delete-btn" onClick={() => onDelete(task.id)}>&times;</button>
  </li>
);

export default TaskItem;
