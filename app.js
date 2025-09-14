const express = require('express');
const app = express();
app.use(express.json());

// Import routes
// ...routes will be added here...

// Root endpoint
app.get('/', (req, res) => {
  res.send('API da Champions League');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
