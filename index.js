const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const getUserRoute = require('./routes/getUser');
const jobsRoute = require('./routes/jobs');
const removeJobRoute = require('./routes/removeJob');
const getJobsRoute = require('./routes/getJobs');
const allowCors = require('./allowCors'); // Adjust the path if necessary
const applyRoute = require('./routes/apply');
const addBlogRoute = require('./routes/addBlog');
const getBlogsRouter = require('./routes/getBlogs');
const announcementsRoute = require('./routes/announcements');

const app = express();

require('dotenv').config();

// Middleware
app.use(allowCors);
app.use(bodyParser.json());
app.use(cors()); // Use CORS

// Routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/getUser', getUserRoute);
app.use('/addJob', jobsRoute);
app.use('/removeJob', removeJobRoute);
app.use('/getJobs', getJobsRoute);
app.use('/jobs/apply', applyRoute);
app.use('/addBlog', addBlogRoute);
app.use('/getBlogs', getBlogsRouter);
app.use('/announcements', announcementsRoute);

/* MONGOOSE SETUP */
const uri = process.env.MONGO_URL;
let mongooseConnection;

async function connectToDatabase() {
  if (!mongooseConnection) {
    mongooseConnection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongooseConnection;
  }
}

module.exports = async (req, res) => {
  await connectToDatabase();
  app(req, res);
};
