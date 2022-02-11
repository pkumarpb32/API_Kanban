const mongoose = require("mongoose");

const ResponsableSchema = new mongoose.Schema({
    codi: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Responsable = mongoose.model("responsables", ResponsableSchema);

module.exports = Responsable;