const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

const shopRoutes = require('./routes/api/shops.js');

// Connect Database
connectDB();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Init Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.use('/api/shops', shopRoutes);

// Handles any requests that don't match the ones above
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling
app.use((req, res, next) => {
  const error = new Error('Sorry, not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
