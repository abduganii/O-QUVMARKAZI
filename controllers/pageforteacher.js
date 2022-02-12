const { verifyuser } = require("../lib/jwt")
const Fs = require("../lib/fsDeal")
const fsAdmin = new Fs("../model/teacher.json")
const fsGrux = new Fs("../model/grux.json")

module.exports = (req, res) => {
    try { 
        const { token } = req.cookies
        const {cotegoriId,number}=verifyuser(token)
        const allTeacher = JSON.parse(fsAdmin.read())
        const AllGrux = JSON.parse(fsGrux.read())
          
        const founduser = allTeacher.find(e=>e.cotegoriId==cotegoriId&&e.phonenumber==number)
        const foundGrux = AllGrux.filter(e => e.gruxteacher == founduser.username)
  
        res.render("teacherpage",{founduser:founduser,foundGrux:foundGrux})
    } catch (error) {
        res.json({
            status:500,
            message: error.message
         })
    }
}