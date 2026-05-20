import Image from "next/image";
import NetworkBackground from "./NetworkBackground";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function SocialIcons({ className }: { className: string }) {
  return (
    <div className={className} style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <a
        href="https://www.linkedin.com/in/logandemaray/"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-social-link"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/cbninja316"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-social-link"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0b1426" }}
    >
      <NetworkBackground />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/ltd-logo.png"
          alt="Logan Thomas Demaray Logo"
          width={80}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl hero-outer">
        <div
          className="w-full rounded-2xl hero-card"
          style={{
            display: "flex",
            gap: 24,
            background: "rgba(15, 29, 53, 0.85)",
            border: "1px solid rgba(139, 92, 246, 0.35)",
            boxShadow:
              "0 0 60px rgba(139, 92, 246, 0.12), 0 8px 32px rgba(0,0,0,0.5)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1
              className="hero-heading"
              style={{ fontWeight: 700, color: "white", marginBottom: 0 }}
            >
              Hi!
            </h1>
            <h1
              className="hero-heading"
              style={{ fontWeight: 700, color: "white", marginBottom: 20 }}
            >
              I&apos;m Logan
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 24 }}>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Full-Stack Software Engineer & Workflow Architect
              </p>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Personal and Small Business Website Creator
              </p>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Home Project and Network Hobbyist
              </p>
            </div>
            <SocialIcons className="hero-icons-desktop" />
          </div>

          <div
            className="hero-photo overflow-hidden relative"
            style={{
              borderRadius: 24,
              border: "2px solid rgba(139, 92, 246, 0.5)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
            }}
          >
            <Image
              src="/logan.png"
              alt="Logan Demaray Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <SocialIcons className="hero-icons-mobile" />
        </div>
      </div>
    </section>
  );
}
