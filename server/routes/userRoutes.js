const Express = require("express")
const { register, login } = require("../controller/userController.js")

const userRoute = Express.Router()

userRoute.post("/register", register)

userRoute.post("/login", login)

module.exports = userRoute