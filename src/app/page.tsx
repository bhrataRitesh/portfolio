import { getSortedProjectsData } from "@/lib/projects";
import HomeClient from "./HomeClient";

export default function Home() {
  // Fetch project data on the server
  const allProjectsData = getSortedProjectsData();

  return <HomeClient projects={allProjectsData} />;
}
