const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jdlt')
  .then(() => {
    console.log('Connected to JDLT database');
  })
  .catch(err => {
    console.log('Cannot connect to database');
  })
