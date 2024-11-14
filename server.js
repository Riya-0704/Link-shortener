/*const express = require("express");
const mongoose = require("mongoose");
const QRCode = require("qrcode");
const path = require("path");
const urlRouter = require('./routes/urlRoute.js');
const PORT = process.env.PORT || 8080;
const app = express();

// Environment Variables for MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/url';

// Middleware to Serve Static Files
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for JSON and URL Encoded Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/', urlRouter);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
*/


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const QRCode = require("qrcode");
const path = require("path");
const urlRouter = require('./routes/urlRoute.js');
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

// MongoDB connection URI with username and password
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://riyagoyalrg07:dB5waMTMv5Pe1DeN@url.pdf6h.mongodb.net/?retryWrites=true&w=majority";

// Middleware to Serve Static Files
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for JSON and URL Encoded Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  
  serverSelectionTimeoutMS: 30000, // 30 seconds
  connectTimeoutMS: 30000,

})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/', urlRouter);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
