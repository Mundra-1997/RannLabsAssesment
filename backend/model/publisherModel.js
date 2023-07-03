const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  organizationName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
