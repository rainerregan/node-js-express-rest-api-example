import express from 'express';

// Setup Environment
const app = express();

// Routes
app.get('/api', (req, res) => {
  res.send('Api')
})

// Listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('Listening for request')
})