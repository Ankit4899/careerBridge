const mongoose = require('mongoose');
require('dotenv').config()
const mongoUrl = process.env.MONGO_URL;
main().then(()=>{
    console.log("Database connected");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoUrl);
}

module.exports = main