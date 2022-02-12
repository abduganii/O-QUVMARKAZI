const Fs = require("../lib/fsDeal")
const cursFs = new Fs("../model/curs.json")

module.exports = (req, res) => {
    try {
        const allcurs = JSON.parse(cursFs.read())
        res.render("kurs",{allcurs:allcurs})
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}