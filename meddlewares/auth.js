const { verifyuser } = require("../lib/jwt")
const Fs = require("../lib/fsDeal")
const fsAdmin = new Fs("../model/admin.json")

module.exports = (req, res, next) => {
    try {
     
        const allAdmins = JSON.parse(fsAdmin.read())
        
        const { token } = req.cookies

        const { cotegoriId,  number } = verifyuser(token)
        const fondAdmin = allAdmins.find(e=> e.cotegoriId==cotegoriId && e.phonenumber == number)
    
        if (!fondAdmin) {
            res.redirect("/login")
            return
        }
            next()

    } catch (error) {
        res.redirect("/login")
    }
}