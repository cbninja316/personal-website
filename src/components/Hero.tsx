import Image from "next/image";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0b1426" }}
    >
      <NetworkBackground />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/ltd-logo.png"
          alt="LTD Logo"
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
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Full Stack Developer
              </p>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Personal and Small Business Website Creator
              </p>
              <p className="hero-body" style={{ color: "#d1d5db" }}>
                Home Project and Network Hobbyist
              </p>
            </div>
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
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
