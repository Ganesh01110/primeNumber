const express = require('express');
const router = express.Router();

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

router.get('/is-prime', (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: 'Number query parameter is required' });
  }

  const parsedNumber = parseInt(number, 10);
  if (isNaN(parsedNumber)) {
    return res.status(400).json({ error: 'Invalid number provided' });
  }

  const result = isPrime(parsedNumber);
  res.json({ number: parsedNumber, isPrime: result });
});

module.exports = router;