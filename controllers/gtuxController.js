const Fs = require("../lib/fsDeal")
const gruxFs = new Fs("../model/grux.json")

module.exports = (req, res) => {
    try {
        const {gruxname,gruxteacher,gruxstart,gruxyonalish} = req.body
        const allgrux = JSON.parse(gruxFs.read())
        
        allgrux.push({
            id: allgrux.length + 1,
            gruxname: gruxname,
            gruxteacher: gruxteacher,
            gruxstart: gruxstart,
            gruxyonalish:gruxyonalish
        })
       
        gruxFs.write(allgrux)
        res.redirect("/grux")
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
