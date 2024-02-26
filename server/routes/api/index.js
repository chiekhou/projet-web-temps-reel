const router = require('express').Router();
const apiScores = require('./scores');

router.use('/scores', apiScores)


module.exports = router;