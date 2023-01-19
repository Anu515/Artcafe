require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');


const blogRoutes = require('./routes/blog');

const app = express();

const ports = process.env.PORT || 3000;

mongoose
.connect(
   `mongodb://localhost:27017/mean` 
)
.then(() => {
  app.listen(ports, console.log(`Server is running on port ${ports}`));
})
.catch((err) => console.log(`Could not connect to database server`, err));

app.use(bodyParser.json());
app.use(cors());

app.use('/api/blog', blogRoutes )