// models/Project.ts
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String,
  link: String,
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);