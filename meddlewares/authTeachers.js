const { verifyuser } = require("../lib/jwt")
const Fs = require("../lib/fsDeal")
const fsAdmin = new Fs("../model/teacher.json")

module.exports = (req, res, next) => {
    try {
        const allTeacher = JSON.parse(fsAdmin.read())
        
        const { token } = req.cookies

        const { cotegoriId,  number } = verifyuser(token)
        const fondTeacher = allTeacher.find(e=> e.cotegoriId==cotegoriId && e.phonenumber == number)
    
        if (!fondTeacher) {
            res.redirect("/login")
        }
        next()
        
    } catch (error) {
        res.redirect("/login")
    }
}