const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/:projectId', async (req, res) => {
    const messages = await Message.find({ projectId: req.params.projectId });
    res.send(messages);
});

router.post('/', async (req, res) => {
    const message = new Message(req.body);
    await message.save();
    res.send(message);
});

module.exports = router;
