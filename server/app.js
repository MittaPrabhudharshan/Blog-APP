const dotenv= require("dotenv")
const Express = require("express")
const userRoute = require("./routes/userRoutes.js")
const blogRoute = require("./routes/blogRoutes.js")
const connectDB = require("./config/db")
dotenv.config()
const app = Express()

app.use(Express.json())
app.use("/user", userRoute)
app.use("/blog", blogRoute)

connectDB()
app.listen(process.env.PORT || 3000, () => {
  console.log("Listening to PORT", process.env.PORT || 3000)
})