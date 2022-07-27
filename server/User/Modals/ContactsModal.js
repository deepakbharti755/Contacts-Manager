const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  company: {
    type: String,
  },
  industry: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  country: {
    type: String,
  },
});

const ContactsModal = mongoose.model("Contacts", ContactsSchema);
module.exports = ContactsModal;
