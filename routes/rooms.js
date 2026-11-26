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

// update only the availability of room selected 
router.post('/:id/availability', async function(req, res, next) {
    try {
        let available = req.body.available === 'true';
        await Room.findByIdAndUpdate(req.params.id, { available: available });
        res.redirect('/rooms');
    } catch (error) {
        next(error);
    }
});

// load the selected room so the form shows its current details
router.get('/:id/edit', async function(req, res, next) {
    try {
        let room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(404).send('Room not found');
        }

        res.render('edit-room', { title: 'Edit study room', room: room });
    } catch (error) {
        next(error);
    }
});

// save the edited room details and claim and unclaim seperately
router.post('/:id/edit', async function(req, res, next) {
    try {
        let room = await Room.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            building: req.body.building,
            capacity: req.body.capacity,
            noiseLevel: req.body.noiseLevel,
            roomNumber: req.body.roomNumber
        });

        if(!room) { 
            return res.status(404).send('Room not found');
        }

        res.redirect('/rooms');
    } catch (error) {
        next(error);
    }
});

// shows which room the visitor is about to delete
router.get('/:id/delete', async function(req, res, next) {
    try {
        let room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(404).send('Room not found');
        }

        res.render('delete-room', { title: 'Delete study room', room: room });
    } catch (error) {
        next(error);
    }
});

// delete the selected room after the visitor confirms
router.post('/:id/delete', async function(req, res, next) {
    try {
        await Room.deleteOne({ _id: req.params.id });
        res.redirect('/rooms');
    } catch (error) {
        next(error);
    }
});
module.exports = router;