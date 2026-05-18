"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type FunProject = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const funProjects: FunProject[] = [
  {
    id: 1,
    title: "Home Lab Network Rack",
    description:
      "Built a fully custom home lab with a 24U rack, including managed switches, patch panels, a pfSense router, and multiple VLANs for network segmentation. Hosts local servers for self-hosted services.",
    image: "https://picsum.photos/400/300?random=30",
  },
  {
    id: 2,
    title: "Self-Hosted Media Server",
    description:
      "Deployed a full self-hosted media stack using Plex, Sonarr, Radarr, and Prowlarr running on a home server with 20TB of storage and hardware transcoding support.",
    image: "https://picsum.photos/400/300?random=31",
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description:
      "Integrated Home Assistant with Z-Wave, Zigbee, and Matter devices throughout the home. Built custom automations for lighting, climate, and security using Node-RED pipelines.",
    image: "https://picsum.photos/400/300?random=32",
  },
];

export default function FunProjects() {
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % funProjects.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance]);

  const getPosition = (index: number): "center" | "right" | "left" => {
    const diff = (index - active + funProjects.length) % funProjects.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  const positionStyles: Record<
    "center" | "right" | "left",
    React.CSSProperties
  > = {
    center: {
      transform: "translateX(0) scale(1)",
      zIndex: 20,
      opacity: 1,
    },
    right: {
      transform: "translateX(68%) scale(0.87)",
      zIndex: 10,
      opacity: 0.7,
    },
    left: {
      transform: "translateX(-68%) scale(0.87)",
      zIndex: 10,
      opacity: 0.7,
    },
  };

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0b1426" }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Fun Projects
      </h2>

      <div className="relative flex items-center justify-center overflow-hidden h-[520px]">
        {funProjects.map((project, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={project.id}
              onClick={() => setActive(index)}
              className="absolute cursor-pointer"
              style={{
                ...positionStyles[pos],
                width: 320,
                borderRadius: 20,
                backgroundColor: "white",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                boxShadow:
                  pos === "center"
                    ? "0 0 0 2px rgba(139,92,246,0.6), 0 0 40px rgba(139,92,246,0.3), 0 16px 48px rgba(0,0,0,0.5)"
                    : "0 0 0 1px rgba(139,92,246,0.3), 0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ padding: "14px 14px 0 14px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 200,
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
              <div style={{ padding: "16px 18px 20px" }}>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#111827",
                    fontSize: 18,
                    marginBottom: 8,
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#4b5563", fontSize: 13, lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {funProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to project ${index + 1}`}
            className="w-3 h-3 rounded-full transition-colors duration-300"
            style={{
              backgroundColor:
                index === active
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
