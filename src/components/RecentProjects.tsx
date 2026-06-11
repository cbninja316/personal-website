import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
};

const projects: Project[] = [
  {
    title: "One Accord",
    description:
      "A fully custom and local website for Southmoore Baptist Church. The site is built with Next.js, Typescript, and C# and deployed with Vercel. Features include a kanban board for church tasks, receipt manager, event photo manager, and a volunteer scheduler.",
    image: "/one-accord.png",
    link: "https://www.youtube.com/watch?v=xt25N3BOHss",
    linkText: "View Video",
  },
  {
    title: "Fix It OKC",
    description:
      "Created a website design and final product from scratch using WordPress and overcoming limitations with custom code. Created a full scheduling back end that would handle scheduling, time off, and employee schedules.",
    image: "/fix-it-okc.png",
    link: "https://fixitokc.com/",
    linkText: "Visit Site",
  },
  {
    title: "Cherokee Hills Baptist Church",
    description:
      "Ground up redesign of the entire website. The site was built on Squarespace, but updated to modernize and automate the new dashboard for new guests and members.",
    image: "/chbc.png",
    link: "https://chbcok.com/",
    linkText: "Visit Site",
  },
  {
    title: "Refi Demo",
    description:
      "Concept design for a small non-profit that aims to modernize and built on Next.js and deployed with Vercel. All components were custom built in Typescript.",
    image: "/refi.png",
    link: "https://refi-frontend.vercel.app",
    linkText: "Visit Site",
  },
  {
    title: "Custom Website Dashboard",
    description:
      "Fully custom dashboard for websites added to the platform. Front end created with Next.js and back end created with C# .NET framework. Full authentication, payment system, and authorization levels for different users.",
    image: "/custom-dashboard.png",
    link: "https://github.com/cbninja316",
    linkText: "Visit Github",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="project-card"
      style={{
        display: "flex",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow:
          "0 0 0 1px rgba(139,92,246,0.45), 0 0 28px rgba(139,92,246,0.2), 0 8px 32px rgba(0,0,0,0.5)",
        minHeight: 0,
      }}
    >
      <div className="project-image-wrapper">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="project-content">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-button-wrap">
          <a href={project.link} className="project-button">
            {project.linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RecentProjects() {
  return (
    <section style={{ backgroundColor: "#0b1426", padding: "32px 0 64px" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 48,
        }}
      >
        Recent Projects
      </h2>

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
