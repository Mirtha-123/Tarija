const lineas = require('../models/lineas').compra

exports.newData = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(req.body)
            var nuevaLinea = new lineas(req.body);
            var response = await nuevaLinea.save();

            res.json(response);

        }
        catch (err) {
            reject(err);
        }
    });
};


exports.readData = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* let total = await lineas.count({})
             let solicitud = req.body
             let numberPages = Math.trunc(parseInt(total) / parseInt(solicitud.max))
             console.log(numberPages)*/
            var response = await lineas.find({})
            console.log(response)
            res.json(response)
        }
        catch (err) {
            reject(err);
        }
    });
};