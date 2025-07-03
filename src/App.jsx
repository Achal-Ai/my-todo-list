import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/storage';
import './styles/App.css';
import './styles/Header.css';
import './styles/Tabs.css';
import './styles/TaskForm.css';
import './styles/TaskList.css';
import './styles/responsive.css';

const emptyIcon = (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="16" fill="#f3f3fa"/>
    <path d="M16 24h16M16 30h10" stroke="#a259ff" strokeWidth="2" strokeLinecap="round"/>
    <rect x="12" y="14" width="24" height="20" rx="6" stroke="#4f8cff" strokeWidth="2"/>
  </svg>
);

function App() {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now() }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filterTasks = () => {
    if (tab === 'Active') return tasks.filter(t => !t.completed);
    if (tab === 'Completed') return tasks.filter(t => t.completed);
    return tasks;
  };

  const sortTasks = (list) => {
    if (sortBy === 'priority') {
      const order = { High: 0, Medium: 1, Low: 2 };
      return [...list].sort((a, b) => order[a.priority] - order[b.priority]);
    }
    if (sortBy === 'category') {
      return [...list].sort((a, b) => a.category.localeCompare(b.category));
    }
    // Default: by due date
    return [...list].sort((a, b) => (a.dueDate || '') > (b.dueDate || '') ? 1 : -1);
  };

  const filtered = sortTasks(filterTasks());
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="app-container">
      <Header total={tasks.length} completed={completedCount} />
      <Tabs current={tab} onChange={setTab} />
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={filtered}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onSort={setSortBy}
        sortBy={sortBy}
        onClearCompleted={clearCompleted}
        emptyIcon={emptyIcon}
      />
    </div>
  );
}

export default App;
