const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3333;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-le6dz.mongodb.net/omnistack07?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.listen(port);
console.log(`Application running on the door ${port}`);

