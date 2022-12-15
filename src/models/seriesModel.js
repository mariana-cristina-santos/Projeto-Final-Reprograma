const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    titulo: {
      type: String,
      required: true,
      unique: true,
    },
    anoLancamento: {
      type: Number,
      required: true,
    },
    temporada:{
      type: Number,
      required: true,
    },
    disponivel: {
      type: Boolean,
      required: true,
    },
    sinopse: {
      type: String,
      required: true,
    },
    atores: {
      type: [String],
      required: true,
    },
    avaliacao: {
      type: String,
      required: true,
      minLenght:0,
      maxLenght:1000
    },
    nota:{
      type: Number,
      minLenght:0,
      maxLenght:2
    },
  },
  {
    timestamp: true,
  }
);

const Model = mongoose.model("Serie", serieSchema);

module.exports = Model