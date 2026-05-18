import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import RecentProjects from "@/components/RecentProjects";
import FunProjects from "@/components/FunProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <FunProjects />
      <Timeline />
      <RecentProjects />
    </main>
  );
}
