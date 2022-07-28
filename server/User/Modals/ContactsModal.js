const mongoose = require("mongoose");

const contactsInfo = new mongoose.Schema({
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

const ContactsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  contacts: [contactsInfo],
});

const ContactsModal = mongoose.model("Contacts", ContactsSchema);
module.exports = ContactsModal;
