const mongoose = require('mongoose')
    , Schema = mongoose.Schema

//mongoose.connect('mongodb://superAdmin:pass1234@167.99.2.159:27017/sulem?authSource=admin', { useNewUrlParser: true });
mongoose.connect("mongodb://root:MUcus-0415@mongogogo/tarija?authSource=admin", { useNewUrlParser: true }).then(() => console.log('Connected!'));;


var compras = Schema({
    codigo: String,
    tipo: String,
    puntos: Array,
    nombre: String,
    depa: String,
    vuelta: Boolean,
    tz_lock: String,
    created_at: { type: Date, required: true, default: Date.now }
})

var compra = mongoose.model('compras', compras)

module.exports.compra = compra