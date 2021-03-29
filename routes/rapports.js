const express = require("express");
const { Schema } = require("mongoose");
const router = express.Router();

// model
const Rapport = require("../models/rapport");

// requests
router.get("/", (req, res) => {
  Rapport.find()
    .then((rapports) => res.json(rapports))
    .catch((error) =>
      res.status(400).json(`get report failed ${error.message}`)
    );
});

router.post("/add", (req, res) => {
  let rapport = new Rapport(req.body);
  rapport
    .save()
    .then(() => res.json(`report added`))
    .catch((error) =>
      res.status(400).json(`get report failed ${error.message}`)
    );
});

// by Id
router.get("/:id", (req, res) => {
  let { id } = req.params;
  Rapport.findById(id)
    .then((rapport) => res.json(rapport))
    .catch((error) =>
      res.status(400).json(`delete report failed ${error.message}`)
    );
});

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  Rapport.findByIdAndDelete(id)
    .then(() => res.json(`report deleted`))
    .catch((error) =>
      res.status(400).json(`delete report failed ${error.message}`)
    );
});

// router.post("/:id", (req, res) => {
//   let { id } = req.params;
//   let {
//     projet,
//     // id_consultant,
//     // id_client,
//     kilometrage_voiture_depart,
//     kilometrage_voiture_retour,
//     tache_effectuee,
//   } = req.body;

//   Rapport.findById(id)
//     .then((rapport) => {
//       projet = projet || rapport.projet;
//       // id_consultant = id_consultant || Schema.ObjectId(rapport.id_consultant);
//       // id_client = id_client || Schema.ObjectId(rapport.id_client);
//       kilometrage_voiture_depart =
//         kilometrage_voiture_depart || rapport.kilometrage_voiture_depart;
//       kilometrage_voiture_retour =
//         kilometrage_voiture_retour || rapport.kilometrage_voiture_retour;
//       tache_effectuee = tache_effectuee || rapport.tache_effectuee;

//       Rapport.findByIdAndUpdate({
//         projet,
//         // id_consultant,
//         // id_client,
//         kilometrage_voiture_depart,
//         kilometrage_voiture_retour,
//         tache_effectuee,
//       })
//         .then(() => res.json(`report updated`))
//         .catch((error) =>
//           res.status(400).json(`updated report failed ${error.message}`)
//         );
//     })
//     .catch((error) =>
//       res.status(400).json(`delete report failed ${error.message}`)
//     );
// });

module.exports = router;
