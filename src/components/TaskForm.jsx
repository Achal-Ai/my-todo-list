import React, { useState } from 'react';
import '../styles/TaskForm.css';

const categories = ['Personal', 'Work'];
const priorities = ['Low', 'Medium', 'High'];

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [priority, setPriority] = useState(priorities[0]);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, category, priority, dueDate, completed: false });
    setText('');
    setCategory(categories[0]);
    setPriority(priorities[0]);
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task…"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        {priorities.map(p => <option key={p}>{p}</option>)}
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TaskForm;
