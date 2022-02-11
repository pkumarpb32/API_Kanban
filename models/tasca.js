const mongoose = require("mongoose");

const TascaSchema = new mongoose.Schema({
    codi: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    data_creacio: {
        type: String,
        required: true
    },
    data_previsio: {
        type: String,
        required: true
    },
    id_responsable: {
        type: Number,
        required: true
    },
    descripcio: {
        type: String,
    },
    estat: {
        type: String,
        required: true
    },
    prioritat: {
        type: String
    }
});

const Tasca = mongoose.model("tasques", TascaSchema);

module.exports = Tasca;