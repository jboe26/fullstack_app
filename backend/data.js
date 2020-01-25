// /backend/data.js
const mongoose = require("mongoose");
mongoose.connect('mongodb:localhost/users_test');
mongoose.connection
 .once('open', () => console.log('Good to go!'))
 .on('error', (error) => {
 console.warn('Warning', error);
 });
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);