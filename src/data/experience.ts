export type TimelineEntry = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tag: "Education" | "Build";
};

// Edit dates and entries freely — this file drives the Journey section.
// Years are approximate placeholders; update to the real year for each build.
export const timeline: TimelineEntry[] = [
  {
    date: "Ongoing",
    title: "Diploma in Mechatronics & Smart Factory Technology",
    subtitle: "NTTF",
    description:
      "Coursework and lab work spanning mechanical design, industrial electronics, automation and controls.",
    tag: "Education",
  },
  {
    date: "2024",
    title: "FPV Racing Drone",
    subtitle: "Drones",
    description: "High-speed FPV drone built from scratch around a KK flight controller.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "Autonomous 5-DOF Robotic Arm",
    subtitle: "Robotics / CAD",
    description: "Designed in Fusion 360 and built from scratch — autonomously sorts 3 colours by camera.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "Autonomous Mobile Robot with Vision",
    subtitle: "Robotics / Computer Vision",
    description: "Raspberry Pi + camera robot navigating and avoiding obstacles using a self-trained vision model.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "ESP32 Multi-Tool Pentesting Device",
    subtitle: "Security Hardware",
    description: "Portable ESP32-based device for hands-on penetration testing and security research.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "Raccoon — Custom PCB",
    subtitle: "PCB Design",
    description: "Full schematic-to-layout PCB design for a product called Raccoon.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "Jarvis — AI Voice Assistant",
    subtitle: "IoT / AI",
    description: "ESP32-based assistant with expressive face animations and home automation control.",
    tag: "Build",
  },
  {
    date: "2025",
    title: "Yani — Voice Assistant",
    subtitle: "AI / Embedded",
    description: "Voice assistant built on Raspberry Pi 4.",
    tag: "Build",
  },
];
