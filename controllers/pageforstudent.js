const { verifyuser } = require("../lib/jwt")
const Fs = require("../lib/fsDeal")
const fsAdmin = new Fs("../model/students.json")


module.exports = (req, res) => {
    try { 
        const { token } = req.cookies
        const {cotegoriId,number}=verifyuser(token)
        const allStudents = JSON.parse(fsAdmin.read())
        const founduser = allStudents.find(e=>e.cotegoriId==cotegoriId&&e.phonenumber==number)
        res.render("studentpage",{founduser:founduser})
    } catch (error) {
        res.json({
            status:500,
            message: error.message
         })
    }
}