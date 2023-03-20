const mongoose = require('mongoose');

const BebidaSchema = mongoose.Schema({
    nombre: {type: String, require},
    varients:[],
    precios: [],
    categoria: {type: String, require},
    imagen:{type: String, require}
},{
    timestamps: true,
})
const BebidaModel = mongoose.model('bebidas' , BebidaSchema)
module.exports = BebidaModel
