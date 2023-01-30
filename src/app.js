const express = require ("express")
const app = express ()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRouterProd = require("./routes/producs")
app.use("/api/products", userRouterProd)

const userRouterCart = require("./routes/carts.js")
app.use("/api/carts", userRouterCart)

const PORT = 8080
const server = app.listen(PORT, ()=> console.log("Server running on 8080"))
server.on("error", error => console.log(error))