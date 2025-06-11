const express = require('express');
const cors = require('cors');
const users = require('./user');
const vehicles = require('./vehicle');
const auth = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', users);
app.use('/api', vehicles);
app.use(auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
