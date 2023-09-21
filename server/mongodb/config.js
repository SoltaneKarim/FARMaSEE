const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect('mongodb+srv://mongo:iheb1234@cluster0.fowqa3m.mongodb.net/farmatsee', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = connectDatabase;
