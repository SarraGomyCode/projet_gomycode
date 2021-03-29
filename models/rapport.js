const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const rapportSchema = new Schema(
  {
    projet: {
      type: String,
      required: true,
    },
    // id_consultant: {
    //   type: Schema.ObjectId,
    //   required: true,
    // },
    // id_client: {
    //   type: Schema.ObjectId,
    //   required: true,
    // },
    // kilometrage_voiture_depart: {
    //   type: Number,
    //   required: true,
    // },
    // kilometrage_voiture_retour: {
    //   type: Number,
    //   required: true,
    // },
    // tache_effectuee: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

// create model

const Rapport = model("rapport", rapportSchema);

module.exports = Rapport;
