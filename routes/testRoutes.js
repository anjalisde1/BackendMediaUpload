// In backend routes (e.g., testRoutes.js)
const express = require('express');
const router = express.Router();

// Test route to check if the backend is working
router.get('/test', (req, res) => {
  res.json({ message: 'Backend is connected' });
});

module.exports = router;
