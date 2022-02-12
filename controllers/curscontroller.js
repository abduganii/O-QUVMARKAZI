const Fs = require("../lib/fsDeal")
const cursFs = new Fs("../model/curs.json")

module.exports = (req, res) => {
    try {
        const {curs} = req.body
        const allcurs = JSON.parse(cursFs.read())
        
        allcurs.push({
            id: allcurs.length + 1,
            curs:curs
        })
       
        cursFs.write(allcurs)
        res.redirect("/curs")
        res.status(200).send({
            stutus:200,
            message:"ok",
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error: error.message
        })
    }
}
