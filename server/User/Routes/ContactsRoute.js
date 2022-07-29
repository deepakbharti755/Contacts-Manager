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
          contacts: req.body.contacts,
        })
          .then((data) => {
            res.status(200).send(data);
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
  const remove = req.query.emailArray;
  UserModal.find({ email: req.body.userdata.email })
    .then((user) => {
      if (user) {
        ContactModal.updateMany(
          { _id: user[0]._id },
          { $pull: { contacts: { $in: [remove] } } }
        )
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

router.get("/", (req, res) => {
  UserModal.find({ email: req.body.userdata.email })
    .then((user) => {
      if (user) {
        ContactModal.aggregate([{ $match: { user: user[0]._id } }])
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

router.get("/search", (req, res) => {
  const search = req.query.email;
  if (search) {
    ContactModal.aggregate([{ contacts: [{ email: { $regex: search } }] }])
      .then((data) => {
        res.status(200).send(data.contacts);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } else {
    res.status(400).send("search is empty");
  }
});

module.exports = router;
