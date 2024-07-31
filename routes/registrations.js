const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Get all registrations
router.get('/', async (req, res) => {
    try {
        const registrations = await Registration.find().populate('event');
        res.json(registrations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new registration
router.post('/', async (req, res) => {
    const registration = new Registration({
        event: req.body.event,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    try {
        const newRegistration = await registration.save();
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get registration by ID
router.get('/:id', async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id).populate('event');
        if (!registration) return res.status(404).json({ message: 'Registration not found' });
        res.json(registration);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
