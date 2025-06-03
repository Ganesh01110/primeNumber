const express = require('express');
const primeRoutes = require('./routes/primeRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', primeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});