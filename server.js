require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const testRoutes = require('./routes/testRoutes');


// Initialize app
const app = express();
// CORS configuration

const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');  // Allow same-origin interaction
    next();
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes);
// app.use('/api/test', testRoutes);
app.use('/api', testRoutes);  // Mounts the routes under /api



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));