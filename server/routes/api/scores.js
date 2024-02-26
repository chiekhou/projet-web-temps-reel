const express = require('express');
const router = express.Router();
const {Scores} = require('../../db/models');

// GET api/scores
router.get('/', async (req, res) => {
    try {
      const scores = await Scores.findAll({
        order: [['createdAt', 'DESC']],
        limit: 20 
      });
      res.json( scores);
    
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.post('/save', async (req, res) => {
    const {username, score} = req.body;
    try {
  
      const newScore = await Scores.create({
        username, score
      });
      res.json(newScore);
    } catch (err) {
      console.error(err);
    }
  });

module.exports = router;