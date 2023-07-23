const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost:27017"//process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}
mongoose.set('strictQuery', true);
module.exports = connectDatabase;