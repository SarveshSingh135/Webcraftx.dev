"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WorkPreview() {
  const [projects, setProjects] = useState<any[]>([]);

  // ✅ YAHI lagana hai (top me)
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="px-6 py-20">

      <h2 className="text-4xl text-center mb-10 text-white">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* 👇 Yaha use hoga */}
        {projects.map((project, index) => (
          <div key={index} className="relative h-60">

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />

            <h3 className="text-center mt-2 text-white">
              {project.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}