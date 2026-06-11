"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type FunProject = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const funProjects: FunProject[] = [
  {
    id: 1,
    title: "One Accord Project",
    description:
      "Created a custom-built website for a local church. See recent projects for more info.",
    image: "/one-accord-logo.png",
  },
  {
    id: 2,
    title: "Home Lab Network Rack",
    description:
      "Built a fully custom home lab with Unifi network equipment, a mini-pc running Proxmox for virtualization, and a custom-built NAS for storage.",
    image: "/network.png",
  },
  {
    id: 3,
    title: "Bench-Styled Planter",
    description:
      "Created a custom-built planter from scratch using a bench-style design.",
    image: "/bench.png",
  },
  {
    id: 4,
    title: "Outdoor Shed",
    description:
      "Renovated an old outdoor shed with replaced siding, sanded and new paint, and built a replacement ramp.",
    image: "/shed.png",
  },
];

export default function FunProjects() {
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % funProjects.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      startTimer();
    },
    [startTimer],
  );

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % funProjects.length);
    startTimer();
  }, [startTimer]);

  const retreat = useCallback(() => {
    setActive((prev) => (prev - 1 + funProjects.length) % funProjects.length);
    startTimer();
  }, [startTimer]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) advance();
      else retreat();
    }
    setTouchStartX(null);
  };

  const getPosition = (
    index: number,
  ): "center" | "right" | "left" | "hidden" => {
    const diff = (index - active + funProjects.length) % funProjects.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === funProjects.length - 1) return "left";
    return "hidden";
  };

  const positionStyles: Record<
    "center" | "right" | "left" | "hidden",
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
    hidden: {
      transform: "translateX(0) scale(0.75)",
      zIndex: 0,
      opacity: 0,
      pointerEvents: "none",
    },
  };

  return (
    <section
      className="fun-projects-section"
      style={{ backgroundColor: "#0b1426" }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Fun Projects
      </h2>

      <div
        className="relative flex items-center justify-center overflow-hidden h-[520px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {funProjects.map((project, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={project.id}
              onClick={() => goTo(index)}
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
            onClick={() => goTo(index)}
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
