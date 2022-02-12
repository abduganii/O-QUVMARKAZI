const { verifyuser } = require("../lib/jwt")
const Fs = require("../lib/fsDeal")
const fsAdmin = new Fs("../model/students.json")

module.exports = (req, res, next) => {
    try {
        const allStudents = JSON.parse(fsAdmin.read())
        
        const { token } = req.cookies

        const { cotegoriId,  number } = verifyuser(token)
        const fondStudent = allStudents.find(e=> e.cotegoriId==cotegoriId && e.phonenumber == number)
    
        if (!fondStudent) {
            res.redirect("/login")
        }
        next()
        
    } catch (error) {
        res.redirect("/login")
    }
}