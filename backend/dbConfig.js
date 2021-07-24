const mongoose = require("mongoose");
//connection à la base de donnée mongoose//
mongoose
  .connect(
    "mongodb+srv://fadione:Anna1954@cluster0.84czk.mongodb.net/node-api?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));