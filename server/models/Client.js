const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
});

const Client = model("Client", clientSchema);

module.exports = Client;
