import express from 'express';

const app = express();
const PORT = 51304;

// Define your routes
app.get('/', (req, res) => {
  res.send('POL Proxy is running...');
});

// Start the server and save the reference to `server`
const server = app.listen(PORT, () => {
  console.log(`POL Proxy is running on port ${PORT}`);
});

// Handle port already in use
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Is the proxy already running?`);
    process.exit(1);
  } else {
    throw err;
  }
});
