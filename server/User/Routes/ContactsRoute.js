const express = require("express");
const router = express.Router();
const ContactModal = require("../Modals/ContactsModal");
const UserModal = require("../Modals/UserModal");

router.post("/", (req, res) => {
  UserModal.find({ email: req.body.userdata.email })
    .then((user) => {
      if (user) {
        ContactModal.create({
          user: user[0]._id,
          contacts: [
            {
              name: req.body.name,
              designation: req.body.designation,
              company: req.body.company,
              industry: req.body.industry,
              email: req.body.email,
              phoneNumber: req.body.phoneNumber,
              country: req.body.country,
            },
          ],
        })
          .then((contacts) => {
            res.status(200).send(contacts);
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      } else {
        res.status(400).send("user not found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/selected", (req, res) => {
  ContactModal.find({ contacts: [{ email: req.body.email }] })
    .then((contact) => {
      if (contact) {
        ContactModal.findByIdAndRemove(contact[0]._id)
          .then(() => {
            res.status(400).send("Contact is deleted");
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      } else {
        res.status(400).send("Contact is not found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
