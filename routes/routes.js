const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;