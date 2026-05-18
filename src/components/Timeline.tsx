import Image from "next/image";

type TimelineEntry = {
  dates: string;
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
};

const leftEntries: TimelineEntry[] = [
  {
    dates: "AUG 2019 - AUG 2023",
    logo: "/oc.png",
    logoAlt: "Oklahoma Christian University logo",
    title: "Oklahoma Christian University",
    subtitle: "Bachelor's Degree",
    description:
      "I completed my Bachelor's in Computer Science with Cybersecurity at Oklahoma Christian University, where I maintained a 3.89 GPA. This program provided a rigorous foundation in Software Engineering and Advanced Database Systems, sparking my interest in building robust, data-driven applications.",
  },
  {
    dates: "AUG 2021 - AUG 2023",
    logo: "/oc.png",
    logoAlt: "Oklahoma Christian University logo",
    title: "Oklahoma Christian University",
    subtitle: "Master's Degree",
    description:
      "Building on the foundation of the Bachelor's degree, I earned my Master's in Computer Science with a perfect 4.0 GPA. My graduate studies focused on the critical intersection of development and defense, specializing in Penetration Testing and Risk Management to ensure every line of code I write is as secure as it is functional.",
  },
];

const rightEntries: TimelineEntry[] = [
  {
    dates: "MAY 2021 - AUG 2023",
    logo: "/tinker.png",
    logoAlt: "Tinker Air Force Base logo",
    title: "Tinker Air Force Base",
    subtitle: "Rotational Intern / 559 SWEG Software Developer Intern",
    description:
      "During my two-year tenure at Tinker Air Force Base, I served as a Software Engineering Intern focused on mission-critical communication systems. I led the development of an internal messaging solution, integrating ActiveMQ for aircraft data ingestion. By creating tailored front-end dashboards, I was able to significantly improve operational awareness and data organization for the team.",
  },
  {
    dates: "AUG 2023 - MAR 2026",
    logo: "/paycom.png",
    logoAlt: "Paycom logo",
    title: "Paycom",
    subtitle: "Software Developer III",
    description:
      "At Paycom, I served as a Full Stack Software Developer III, where I specialized in creating benefits-focused Human Capital Management solutions. I spearheaded the redesign of core dashboards to improve user experience and system efficiency, specifically focusing on recreating benefit platforms and modernizing them with React. My work centered on delivering new capabilities, such as automated Arrear processing and intuitive Qualifying Event workflows, to help employees enroll in benefits faster and more effectively.",
  },
];

const cardShadow =
  "0 0 0 1px rgba(139,92,246,0.45), 0 0 28px rgba(139,92,246,0.2), 0 8px 32px rgba(0,0,0,0.5)";

const connectorColor = "rgba(148,163,184,0.45)";

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: 88,
        height: 88,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        border: "2px solid rgba(255,255,255,0.25)",
        boxShadow: "0 0 16px rgba(139,92,246,0.25)",
      }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function EntryCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div
      style={{
        borderRadius: 16,
        backgroundColor: "white",
        padding: "22px 26px",
        boxShadow: cardShadow,
      }}
    >
      <h3
        style={{
          fontWeight: 700,
          color: "#111827",
          fontSize: 16,
          marginBottom: 4,
        }}
      >
        {entry.title}
      </h3>
      <p
        style={{
          color: "#7c3aed",
          fontSize: 12,
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        {entry.subtitle}
      </p>
      <p style={{ color: "#4b5563", fontSize: 13, lineHeight: 1.65 }}>
        {entry.description}
      </p>
    </div>
  );
}

function LeftEntry({ entry }: { entry: TimelineEntry }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
        <Logo src={entry.logo} alt={entry.logoAlt} />
        <div
          style={{
            flex: 1,
            marginLeft: 16,
            borderBottom: `2px solid ${connectorColor}`,
            paddingBottom: 6,
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {entry.dates}
          </p>
        </div>
      </div>
      <div style={{ paddingLeft: 0, paddingRight: 40 }}>
        <EntryCard entry={entry} />
      </div>
    </div>
  );
}

function RightEntry({ entry }: { entry: TimelineEntry }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
        <div
          style={{
            flex: 1,
            marginRight: 16,
            borderBottom: `2px solid ${connectorColor}`,
            paddingBottom: 6,
            textAlign: "right",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {entry.dates}
          </p>
        </div>
        <Logo src={entry.logo} alt={entry.logoAlt} />
      </div>
      <div style={{ paddingLeft: 40, paddingRight: 0 }}>
        <EntryCard entry={entry} />
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section style={{ backgroundColor: "#0b1426", padding: "96px 0" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 72,
        }}
      >
        My Timeline
      </h2>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 4,
              transform: "translateX(-50%)",
              backgroundColor: "rgba(148,163,184,0.45)",
              borderRadius: 2,
            }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              {leftEntries.map((entry, i) => (
                <LeftEntry key={i} entry={entry} />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 64,
                paddingTop: 144,
              }}
            >
              {rightEntries.map((entry, i) => (
                <RightEntry key={i} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
