const express = require('express');
const path = require('path');
const app = express();

// API routes
app.use('/api', apiRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Catch all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/pages/index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});