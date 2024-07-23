const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const Message = require('./models/Message');
const Task = require('./models/Task');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/project-management', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/messages', require('./routes/messages'));
app.use('/api/tasks', require('./routes/tasks'));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', async (data) => {
        const message = new Message(data);
        await message.save();
        io.emit('receiveMessage', message);
    });

    socket.on('updateTask', async (data) => {
        const task = await Task.findByIdAndUpdate(data._id, data, { new: true });
        io.emit('taskUpdated', task);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
