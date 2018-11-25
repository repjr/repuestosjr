const Repuesto = require("../models/Repuesto");

exports.listAllRepuestos = (req, res) => {
  Repuesto.find({}, (err, repuesto) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(repuesto);
  });
};

exports.createNewRepuesto = (req, res) => {
  let newRepuesto = new Repuesto(req.body);
  newRepuesto.save((err, repuesto) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(repuesto);
  });
};

exports.readRepuesto = (req, res) => {
  Repuesto.findById(req.params.repuestoid, (err, repuesto) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(repuesto);
  });
};

exports.updateRepuesto = (req, res) => {
  Repuesto.findOneAndUpdate(
    { _id: req.params.repuestoid },
    req.body,
    { new: true },
    (err, repuesto) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(repuesto);
    }
  );
};

exports.deleteRepuesto = (req, body) => {
  Repuesto.remove({ _id: req.params.repuestoid }, (err, repuesto) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Repuesto successfully deleted" });
  });
};
