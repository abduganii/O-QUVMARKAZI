const Fs = require("../lib/fsDeal")
const adminFs = new Fs("../model/students.json")

module.exports = (req, res) => {
    try {
        const {phonenumber,username,birthday,erkakAyol,telegram,grux} = req.body
        const allstudents = JSON.parse(adminFs.read())
        
        allstudents.push({
            id: allstudents.length + 1,
            username: username,
            phonenumber: phonenumber,
            birthday: birthday,
            erkakAyol: erkakAyol,
            telegram: telegram,
            grux: grux,
            cotegoriId: 3,
            password:`${phonenumber[5]}${telegram[2]}${allstudents.length + 1}${Math.floor(Math.random()*10000)}`
        })
        res.redirect("/students")
        adminFs.write(allstudents)
        res.status(200).send({
            stutus:200,
            message:"ok",
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
}