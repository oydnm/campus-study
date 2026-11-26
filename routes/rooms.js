let express = require('express');
let router = express.Router();
let Room = require('../models/room');

// loads every study room so visitors can browse the directory
router.get('/', async function(req, res, next) {
    try {
        let rooms = await Room.find();
        res.render('rooms', { title: 'Study room', rooms: rooms });

    } catch (error) {
        next(error);
    }
});

// show the form when a vistor clicks add room
router.get('/add', function(req, res) {
    res.render('add-room', { title: 'Add a study room' });
});

// save the submitted room and return to the directory
router.post('/add', async function(req, res, next) {
    try {
        await Room.create({
            name: req.body.name,
            building: req.body.building,
            capacity: req.body.capacity,
            noiseLevel: req.body.noiseLevel,
            roomNumber: req.body.roomNumber,
            available: true
        });

        res.redirect('/rooms');
    } catch (error) {
        next(error);
    }
});
module.exports = router;