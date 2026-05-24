// app/api/projects/route.ts
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  await connectDB();
  const projects = await Project.find();
  return Response.json(projects);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();

  const project = await Project.create(data);

  return Response.json(project);
}