// app/admin/page.tsx
"use client";

import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    image: "",
    category: "",
    link: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Project added 🚀");

    setForm({ title: "", image: "", category: "", link: "" });
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-6">Admin Panel</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          placeholder="Title"
          className="w-full p-3 bg-gray-800"
          value={form.title}
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <input
          placeholder="Image URL"
          className="w-full p-3 bg-gray-800"
          value={form.image}
          onChange={(e)=>setForm({...form,image:e.target.value})}
        />

        <input
          placeholder="Category (Website/App/UI)"
          className="w-full p-3 bg-gray-800"
          value={form.category}
          onChange={(e)=>setForm({...form,category:e.target.value})}
        />

        <input
          placeholder="Project Link"
          className="w-full p-3 bg-gray-800"
          value={form.link}
          onChange={(e)=>setForm({...form,link:e.target.value})}
        />

        <button className="bg-blue-600 px-6 py-3 rounded">
          Add Project
        </button>

      </form>
    </div>
  );
}