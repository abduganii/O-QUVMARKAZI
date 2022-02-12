const { verify, sign } = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")

const signuser = (data)=> sign(data, SECRET_KEY)
const verifyuser = (data) => verify(data, SECRET_KEY)

module.exports = {
    signuser,
    verifyuser
}