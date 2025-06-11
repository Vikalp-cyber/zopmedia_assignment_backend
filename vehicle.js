const express = require('express');
const router = express.Router();
const authenticateToken = require('./auth');

router.get('/vehicles', (req, res) => {
  const data = [
    { id: 1, model: "Maruti Suzuki", type: "Hatchback", fuel: "Petrol" },
    { id: 2, model: "Tata Nexon", type: "SUV", fuel: "Diesel" },
    { id: 3, model: "Honda Activa", type: "Scooter", fuel: "Petrol" },
  ];
  res.json(data);
});

module.exports = router;
