import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import Chat from './components/Chat';
import './App.css';

const App = () => {
    const projectId = "project123"; // Replace with your project ID

    return (
        <div className="App">
            <h1>Project Management App</h1>
            <div className="kanban-chat-container">
                <KanbanBoard projectId={projectId} />
                <Chat projectId={projectId} />
            </div>
        </div>
    );
};

export default App;
