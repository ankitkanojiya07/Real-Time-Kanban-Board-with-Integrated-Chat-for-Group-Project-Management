import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const KanbanBoard = ({ projectId }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '', status: 'To Do', projectId });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/tasks/${projectId}`)
            .then(response => setTasks(response.data));

        socket.on('taskUpdated', (updatedTask) => {
            setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
        });

        return () => socket.off('taskUpdated');
    }, [projectId, tasks]);

    const createTask = () => {
        axios.post('http://localhost:5000/api/tasks', newTask)
            .then(response => setTasks([...tasks, response.data]));
    };

    const updateTaskStatus = (taskId, status) => {
        const updatedTask = tasks.find(task => task._id === taskId);
        updatedTask.status = status;
        socket.emit('updateTask', updatedTask);
    };

    return (
        <div className="kanban-board">
            {['To Do', 'In Progress', 'Review', 'Done'].map(status => (
                <div key={status} className="kanban-column">
                    <h2>{status}</h2>
                    {tasks.filter(task => task.status === status).map(task => (
                        <div key={task._id} className="kanban-task">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button onClick={() => updateTaskStatus(task._id, status)}>Move to {status}</button>
                        </div>
                    ))}
                </div>
            ))}
            <div>
                <input type="text" placeholder="Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
                <textarea placeholder="Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}></textarea>
                <input type="text" placeholder="Assigned To" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} />
                <input type="date" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
                <button onClick={createTask}>Create Task</button>
            </div>
        </div>
    );
};

export default KanbanBoard;
