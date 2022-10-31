const mongoose = require("mongoose")

function main() {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(_response => console.log("Connected"))
    .catch(err => console.log("DB Error" + err))
}

main()
