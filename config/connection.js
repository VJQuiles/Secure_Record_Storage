const mongoose = require('mongoose');
require('dotenv').config

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));;

module.exports = mongoose.connection;