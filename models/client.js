const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const clientSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    projet: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create model

const Client = model("client", clientSchema);

module.exports = Client;
