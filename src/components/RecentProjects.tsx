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
      style={{
        display: "flex",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow:
          "0 0 0 1px rgba(139,92,246,0.45), 0 0 28px rgba(139,92,246,0.2), 0 8px 32px rgba(0,0,0,0.5)",
        minHeight: 240,
      }}
    >
      <div
        style={{
          width: "42%",
          flexShrink: 0,
          alignSelf: "stretch",
          padding: 16,
        }}
      >
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

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 36px",
        }}
      >
        <div>
          <h3
            style={{
              fontWeight: 700,
              color: "#111827",
              fontSize: 26,
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.65 }}>
            {project.description}
          </p>
        </div>

        <div style={{ marginTop: 24 }}>
          <a
            href={project.link}
            style={{
              display: "inline-block",
              padding: "10px 32px",
              borderRadius: 9999,
              border: "1.5px solid rgba(0,0,0,0.18)",
              fontSize: 15,
              fontWeight: 500,
              color: "#374151",
              textDecoration: "none",
              transition: "background-color 0.2s",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            }}
          >
            {project.linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RecentProjects() {
  return (
    <section style={{ backgroundColor: "#0b1426", padding: "96px 0" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 64,
        }}
      >
        Recent Projects
      </h2>

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
