const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"] },
  clientId: { type: Schema.Types.ObjectId, ref: "Client" },
});

const Project = model("Project", projectSchema);

module.exports = Project;
