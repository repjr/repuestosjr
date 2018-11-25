const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
  cantidad: {
    type: String,
    required: true
  },
  repuestoId: {
  	type: String,
  	required: true
  },
  usuarioId: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model("Ventas", VentaSchema);