const Venta = require("../models/Venta");

exports.listAllVentas = (req, res) => {
  Venta.find({}, (err, venta) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(venta);
  });
};

exports.createNewVenta = (req, res) => {
  let newVenta = new Venta(req.body);
  newVenta.save((err, venta) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(venta);
  });
};

exports.readVenta = (req, res) => {
  Venta.findById(req.params.ventaid, (err, venta) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(venta);
  });
};

exports.updateVenta = (req, res) => {
  Venta.findOneAndUpdate(
    { _id: req.params.ventaid },
    req.body,
    { new: true },
    (err, venta) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(venta);
    }
  );
};

exports.deleteVenta = (req, body) => {
  Venta.remove({ _id: req.params.ventaid }, (err, venta) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Venta successfully deleted" });
  });
};