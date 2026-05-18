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

      <div className="relative z-10 w-full max-w-5xl px-8">
        <div
          className="w-full rounded-2xl flex flex-col gap-8 sm:flex-row sm:items-center"
          style={{
            background: "rgba(15, 29, 53, 0.85)",
            border: "1px solid rgba(139, 92, 246, 0.35)",
            boxShadow:
              "0 0 60px rgba(139, 92, 246, 0.12), 0 8px 32px rgba(0,0,0,0.5)",
            backdropFilter: "blur(12px)",
            padding: "48px 56px",
          }}
        >
          <div className="flex-1 min-w-0">
            <h1 className="text-6xl font-bold text-white leading-tight">Hi!</h1>
            <h1 className="text-6xl font-bold text-white leading-tight mb-8">
              I&apos;m Logan
            </h1>
            <div className="space-y-2">
              <p className="text-gray-300 text-lg">Full Stack Developer</p>
              <p className="text-gray-300 text-lg">
                Personal and Small Business Website Creator
              </p>
              <p className="text-gray-300 text-lg">
                Home Project and Network Hobbyist
              </p>
            </div>
          </div>

          <div
            className="w-full sm:w-72 h-72 sm:h-80 rounded-2xl overflow-hidden flex-shrink-0 relative"
            style={{
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
