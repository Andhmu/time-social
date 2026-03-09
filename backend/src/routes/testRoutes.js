const express = require('express');
const router = express.Router();

// Тестовый GET запрос
router.get('/test', (req, res) => {
  res.json({
    message: 'API работает!',
    data: {
      users: 100,
      streams: 5,
      time: Date.now()
    }
  });
});

// Тестовый POST запрос
router.post('/echo', (req, res) => {
  res.json({
    message: 'Echo endpoint',
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;