module.exports = function(app) {
  const Card = require("./src/models/Card");
  const Profile = require("./src/models/Profile");

  app.get("/api/cards", (req, res) => {
    Card.find()
      .then(cards => res.json(cards))
      .catch(err => res.json(err));
  });

  app.post("/api/cards", (req, res) => {
    Card.create(req.body)
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });

  app.patch("/api/cards/:id", (req, res) => {
    const { id } = req.params;
    Card.findByIdAndUpdate(id, req.body, { new: true })
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });

  app.delete("/api/cards/:id", (req, res) => {
    const { id } = req.params;
    Card.findByIdAndRemove(id)
      .then(card => res.json({ success: true }))
      .catch(err => res.json(err));
  });

  app.get("/api/profiles", (req, res) => {
    Profile.find()
      .then(cards => res.json(cards))
      .catch(err => res.json(err));
  });

  app.post("/api/profiles", (req, res) => {
    Profile.create(req.body)
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });

  app.patch("/api/profiles/:id", (req, res) => {
    const { id } = req.params;
    Profile.findByIdAndUpdate(id, req.body, { new: true })
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });
};
