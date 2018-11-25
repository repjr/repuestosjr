const Usuario = require("../models/Usuario");

exports.listAllUsuarios = (req, res) => {
  Usuario.find({}, (err, usuario) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(usuario);
  });
};

exports.createNewUsuario = (req, res) => {
  let newUsuario = new Usuario(req.body);
  newUsuario.save((err, usuario) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(usuario);
  });
};

exports.readUsuario = (req, res) => {
  Usuario.findById(req.params.usuarioid, (err, usuario) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(usuario);
  });
};

exports.updateUsuario = (req, res) => {
  Usuario.findOneAndUpdate(
    { _id: req.params.usuarioid },
    req.body,
    { new: true },
    (err, usuario) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(usuario);
    }
  );
};

exports.deleteUsuario = (req, body) => {
  Usuario.remove({ _id: req.params.usuarioid }, (err, usuario) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Usuario successfully deleted" });
  });
};
