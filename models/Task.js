const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  fechaInicial: {
  	type: Date,
  	required: true
  },
  fechaFinal: {
  	type: Date,
  	required: true
  },
  responsableID: {
  	type: Number,
  	required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedOn: {
  	type: Date,
  	default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
