export const skillCategories = [
  {
    title: "Robotics",
    items: ["Autonomous navigation", "Computer vision", "Servo control", "Kinematics (5-DOF)", "Sensor-driven decision logic"],
  },
  {
    title: "Embedded Systems",
    items: ["ESP32", "Raspberry Pi", "Raspberry Pi 4", "C / C++", "Python", "Firmware development"],
  },
  {
    title: "AI Voice Assistants",
    items: ["ESP32 (XIAO firmware)", "Voice interaction pipelines", "Home automation integration"],
  },
  {
    title: "Drones",
    items: ["KK flight controllers", "FPV builds", "ESCs & motors", "From-scratch frame builds"],
  },
  {
    title: "PCB Design",
    items: ["Schematic capture", "Board layout", "Component selection", "Hardware product development"],
  },
  {
    title: "Security Hardware",
    items: ["ESP32-based tooling", "Hands-on penetration testing hardware", "Custom firmware"],
  },
  {
    title: "CAD & Fabrication",
    items: ["Fusion 360", "Mechanical design", "From-scratch mechanical builds"],
  },
  {
    title: "AI / ML",
    items: ["Custom obstacle-detection training", "Colour-based object detection", "On-device deployment"],
  },
];

export const labTools = [
  { group: "Microcontrollers", items: ["ESP32", "ESP32 (XIAO)"] },
  { group: "Computing", items: ["Raspberry Pi", "Raspberry Pi 4"] },
  { group: "CAD", items: ["Fusion 360"] },
  { group: "Programming", items: ["Python", "C", "C++"] },
  { group: "Vision / AI", items: ["Custom-trained detection models", "Colour detection", "On-device inference"] },
  { group: "Hardware", items: ["Servos (MG996R, SG90)", "KK flight controller", "Custom PCBs"] },
];

export const buildCategories = [
  {
    number: "01",
    title: "Robotics",
    description: "Autonomous machines that perceive their environment with a camera and act on it — no remote control.",
    technologies: ["Raspberry Pi", "Raspberry Pi 4", "Python", "Computer Vision", "Servos"],
  },
  {
    number: "02",
    title: "Embedded Systems",
    description: "Microcontroller-driven devices, from firmware up, built around the ESP32 and Raspberry Pi families.",
    technologies: ["ESP32", "Raspberry Pi", "C / C++", "Python"],
  },
  {
    number: "03",
    title: "AI Voice Assistants",
    description: "Voice-driven assistants with real personality — expressive, and wired into home automation.",
    technologies: ["ESP32 (XIAO)", "Raspberry Pi 4", "Voice AI"],
  },
  {
    number: "04",
    title: "Drones",
    description: "FPV platforms built entirely from individual components, tuned for speed.",
    technologies: ["KK Flight Controller", "FPV", "ESCs"],
  },
  {
    number: "05",
    title: "PCB Design",
    description: "Schematic-to-layout board design for real hardware products.",
    technologies: ["Schematic Capture", "PCB Layout"],
  },
  {
    number: "06",
    title: "Security Hardware",
    description: "Purpose-built ESP32 hardware for hands-on penetration testing and security research.",
    technologies: ["ESP32", "Custom Firmware"],
  },
  {
    number: "07",
    title: "CAD & Fabrication",
    description: "Mechanical structures designed from zero in Fusion 360 before a single part is built.",
    technologies: ["Fusion 360", "Mechanical Design"],
  },
  {
    number: "08",
    title: "AI / ML",
    description: "Custom-trained vision models for obstacle detection and colour-based sorting, deployed on-device.",
    technologies: ["Custom Dataset Training", "On-device Inference"],
  },
];

export const process = [
  { number: "01", title: "Idea", note: "Start from a real constraint, not a spec sheet." },
  { number: "02", title: "Research", note: "Study existing approaches before choosing a direction." },
  { number: "03", title: "Design", note: "Sketch mechanical, electrical and software boundaries — CAD where it matters." },
  { number: "04", title: "Prototype", note: "Get something rough working end-to-end, fast." },
  { number: "05", title: "Build", note: "Replace rough parts with real hardware and code." },
  { number: "06", title: "Test", note: "Push it until it breaks, on the bench and in the field." },
  { number: "07", title: "Iterate", note: "Fix what broke. Repeat until it's boringly reliable." },
  { number: "08", title: "Deploy", note: "Ship it, document it, move to the next build." },
];
