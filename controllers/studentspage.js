const Fs = require("../lib/fsDeal")
const adminFs = new Fs("../model/students.json")
const gruxFs = new Fs("../model/grux.json")
module.exports = (req, res) => {
    try { 
        const allstudents = JSON.parse(adminFs.read())
        const allgrux = JSON.parse(gruxFs.read())
        res.render("students", {allstudents:allstudents,allgrux:allgrux})
    } catch (error) {
        res.json({
            status:500,
            message: error.message
         })
    }
}