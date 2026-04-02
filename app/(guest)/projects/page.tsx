"use client";

import { useState } from "react";
import ProjectList from "@/features/projects/Projectlist";
import  {PROJECTS}  from "@/constant/projects";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {

    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className=" text-2xl text-center font-bold p-5">Myworks</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-full mb-4"
      />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

