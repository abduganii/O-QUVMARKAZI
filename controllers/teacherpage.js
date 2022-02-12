const Fs = require("../lib/fsDeal")
const teacherFs = new Fs("../model/teacher.json")
const gruxFs = new Fs("../model/grux.json")
const cursFs = new Fs("../model/curs.json")
module.exports = (req, res) => {
    try {
        const allcurs = JSON.parse(cursFs.read())
        const allteacher = JSON.parse(teacherFs.read())
        const allgrux = JSON.parse(gruxFs.read())
        res.render("teacher",{allteacher:allteacher,allgrux:allgrux,allcurs:allcurs})
    } catch (error) {
        res.json({
            status:500,
            message: error.message
         })
    }
}