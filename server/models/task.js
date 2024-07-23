const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    assignedTo: String,
    dueDate: Date,
    status: String, // e.g., 'To Do', 'In Progress', 'Review', 'Done'
    projectId: String
});

module.exports = mongoose.model('Task', taskSchema);
