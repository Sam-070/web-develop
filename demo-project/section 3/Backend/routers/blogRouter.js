const express = require('express');

const router = express.Router();

router.get('/addblog', (req, res) => {
    res.send('Response send for Add Blog');
});
router.get('/getbyid', (req, res) => {
    res.send('Response send for getbyid');
});
router.get('/getall', (req, res) => {
    res.send('Response send for getall');
});

module.exports = router;