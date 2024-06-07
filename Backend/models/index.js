const mongoose = require("mongoose");
const uri = "mongodb+srv://vamsikeshwaran:admin@cluster0.gtobdi7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")

    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };