export type Project = {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  status: "Shipped" | "Prototyping" | "Testing" | "Development";
  description: string;
  longDescription: string;
  problem: string;
  approach: string;
  architecture: string[];
  hardware: string[];
  software: string[];
  challenges: string;
  result: string;
  learnings: string;
  technologies: string[];
  features: string[];
  specs?: { label: string; value: string }[];
  image: string;
  gallery: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  size: "large" | "medium";
};

// NOTE: All project images are now using real photos from /public/images.

export const projects: Project[] = [
  {
    id: "01",
    number: "01",
    title: "Autonomous Mobile Robot with Vision",
    slug: "autonomous-mobile-robot-vision",
    category: "Robotics / Computer Vision",
    year: "2025",
    status: "Development",
    description:
      "A fully autonomous mobile robot built around a Raspberry Pi and Pi Camera, trained on custom obstacle data to navigate and avoid obstacles on its own.",
    longDescription:
      "A ground-up mobile robotics platform where the robot's obstacle awareness comes entirely from a custom-trained vision model, not a LiDAR or ultrasonic sensor array. The model is trained on obstacle data I collected myself, then deployed on-device so the robot can move and steer around obstacles using only what its camera sees.",
    problem:
      "Wanted a mobile robot that could navigate a real environment autonomously using vision as the primary sense — closer to how a person avoids obstacles than a robot relying on a single distance sensor.",
    approach:
      "Collected and labeled obstacle image data myself, trained a vision model on it, and deployed the model on the Raspberry Pi so the robot could classify what was ahead in real time and adjust its path accordingly.",
    architecture: ["RPI CAMERA", "TRAINED VISION MODEL", "RASPBERRY PI", "MOTOR CONTROL", "ROBOT CHASSIS"],
    hardware: ["Raspberry Pi", "Raspberry Pi Camera", "Motor driver", "Chassis + wheels"],
    software: ["Python", "Custom-trained obstacle detection model"],
    challenges:
      "Building a usable obstacle dataset from scratch and getting the trained model to run reliably in real time on the Pi's limited compute.",
    result:
      "A robot that runs fully autonomously, using its own camera feed and a self-trained model to detect and avoid obstacles without any manual input.",
    learnings:
      "Data quality mattered more than model complexity — a smaller, well-labeled obstacle dataset outperformed a bigger, noisier one.",
    technologies: ["Raspberry Pi", "Python", "Computer Vision", "Custom Dataset Training"],
    features: [
      "Custom-trained obstacle detection model",
      "Fully autonomous navigation",
      "Real-time obstacle avoidance",
      "Vision-only perception (no LiDAR)",
    ],
    image: "/images/autonomous-robot.jpg",
    gallery: ["/images/autonomous-robot.jpg"],
    featured: true,
    size: "large",
  },
  {
    id: "02",
    number: "02",
    title: "Autonomous 5-DOF Robotic Arm",
    slug: "autonomous-5dof-robotic-arm",
    category: "Robotics / CAD / Computer Vision",
    year: "2025",
    status: "Development",
    description:
      "A 5-DOF robotic arm designed and built from scratch — including full CAD — that autonomously sorts objects by colour using a camera.",
    longDescription:
      "Every part of this arm was designed from zero: the mechanical structure was modeled in Fusion 360 before anything was built, then driven by four MG996R servos at the main joints and an SG90 servo on the gripper. A Raspberry Pi 4 with a Camera V2 gives it vision, which it uses to identify three different colours and sort each one into its own location, fully on its own.",
    problem:
      "Wanted to go beyond a manually-controlled arm and build one that could perceive, decide, and act — sorting objects by colour without being told where each one is.",
    approach:
      "Designed the arm's structure in Fusion 360 first, then built it physically around MG996R servos for the higher-torque joints and an SG90 for the gripper. Layered a colour-detection vision pipeline on the Raspberry Pi 4 + Camera V2 on top to drive the sorting logic.",
    architecture: ["CAMERA V2", "COLOUR DETECTION", "RASPBERRY PI 4", "SERVO CONTROL", "5-DOF ARM + GRIPPER"],
    hardware: ["4x MG996R servos", "1x SG90 servo (gripper)", "Raspberry Pi 4", "Raspberry Pi Camera V2"],
    software: ["Fusion 360 (CAD)", "Python", "Computer vision (colour detection)"],
    challenges:
      "Getting the CAD-designed linkages to hold up mechanically under the MG996R's torque, and tuning the vision pipeline to reliably tell the three colours apart under different lighting.",
    result:
      "A working 5-DOF arm, built entirely from a CAD design, that autonomously identifies three colours with its camera and sorts each into a different location without manual control.",
    learnings:
      "Designing the mechanical structure in CAD before building saved significant rework later, and colour-sorting logic is only as reliable as the lighting conditions it's tuned for.",
    technologies: ["Fusion 360", "MG996R", "SG90", "Raspberry Pi 4", "Camera V2", "Python", "Computer Vision"],
    features: [
      "Designed from scratch in Fusion 360",
      "5 degrees of freedom",
      "Autonomous colour sorting (3 colours)",
      "Camera-based object identification",
      "Sorts objects into separate locations",
    ],
    image: "/images/robotic-arm-1.jpg",
    gallery: ["/images/robotic-arm-1.jpg", "/images/robotic-arm-2.jpg", "/images/robotic-arm-3.jpg"],
    featured: true,
    size: "medium",
  },
  {
    id: "03",
    number: "03",
    title: "FPV Racing Drone",
    slug: "fpv-racing-drone",
    category: "Drones",
    year: "2024",
    status: "Testing",
    description: "A high-speed FPV drone built entirely from scratch around a KK flight controller.",
    longDescription:
      "A from-scratch FPV build — frame, wiring and setup all done manually — centered on a KK flight controller and tuned for speed and manual flight responsiveness.",
    problem: "Wanted to build and understand an FPV platform from the ground up, not from a pre-built kit.",
    approach:
      "Built the frame and power system from individual components, wired and configured the KK flight controller, and tuned it for fast, responsive manual FPV flight.",
    architecture: ["PILOT INPUT", "FPV LINK", "KK FLIGHT CONTROLLER", "ESCs", "MOTORS"],
    hardware: ["KK flight controller", "Custom frame", "FPV camera + video transmitter", "Motors + ESCs"],
    software: ["KK flight controller firmware / tuning"],
    challenges: "Tuning the KK flight controller for stable but fast manual flight took several iterations.",
    result: "A fast, flight-tested FPV drone built completely from scratch.",
    learnings: "Flight controller tuning has an outsized effect on how a drone actually feels to fly.",
    technologies: ["KK Flight Controller", "FPV", "ESCs"],
    features: ["Built from scratch", "High-speed manual flight", "KK flight controller"],
    image: "/images/fpv-drone-1.jpg",
    gallery: ["/images/fpv-drone-1.jpg", "/images/fpv-drone-2.jpg", "/images/fpv-drone-3.jpg", "/images/fpv-drone-4.jpg"],
    featured: true,
    size: "medium",
  },
  {
    id: "04",
    number: "04",
    title: "ESP32 Multi-Tool Pentesting Device",
    slug: "esp32-pentesting-device",
    category: "Embedded Systems / Security Hardware",
    year: "2025",
    status: "Development",
    description:
      "An ESP32-based multi-purpose penetration testing device for hands-on security research and hardware experimentation.",
    longDescription:
      "A compact ESP32-based tool built for hands-on network and hardware security research and testing on my own devices and lab setups.",
    problem: "Wanted a single portable ESP32 platform to support hands-on security research and testing.",
    approach: "Built firmware and hardware around the ESP32 to consolidate multiple testing functions into one device.",
    architecture: ["ESP32", "ONBOARD FIRMWARE", "MULTI-FUNCTION TOOLSET"],
    hardware: ["ESP32"],
    software: ["Custom firmware"],
    challenges: "",
    result: "A working multi-function ESP32 device used for personal security research and testing.",
    learnings: "",
    technologies: ["ESP32", "Embedded firmware", "Security research"],
    features: ["Multi-purpose testing toolset", "ESP32-based", "Portable form factor"],
    image: "/images/esp32-1.jpg",
    gallery: ["/images/esp32-1.jpg", "/images/esp32-2.jpg", "/images/esp32-3.jpg"],
    featured: true,
    size: "medium",
  },
  {
    id: "05",
    number: "05",
    title: "Raccoon — Custom PCB",
    slug: "raccoon-pcb",
    category: "PCB Design / Hardware Product Development",
    year: "2025",
    status: "Development",
    description: "Designed the custom PCB — schematic through layout — for a product called Raccoon.",
    longDescription:
      "End-to-end PCB design work for a product called Raccoon: schematic capture, component selection, and board layout as part of the product's hardware development.",
    problem: "",
    approach: "Took the product from schematic design through to a manufacturable PCB layout.",
    architecture: [],
    hardware: ["Custom PCB (Raccoon)"],
    software: ["PCB design / EDA tools"],
    challenges: "",
    result: "A completed custom PCB design ready for the Raccoon product.",
    learnings: "",
    technologies: ["PCB Design", "Schematic Capture", "Hardware Product Development"],
    features: ["Full schematic-to-layout PCB design"],
    image: "/images/raccoon-1.jpg",
    gallery: ["/images/raccoon-1.jpg", "/images/raccoon-2.jpg", "/images/raccoon-3.jpg", "/images/raccoon-4.jpg"],
    featured: true,
    size: "medium",
  },
  {
    id: "06",
    number: "06",
    title: "Jarvis — AI Voice Assistant",
    slug: "jarvis-ai-voice-assistant",
    category: "IoT / AI / Embedded",
    year: "2025",
    status: "Development",
    description:
      "A friendly AI voice assistant running on an ESP32 (XIAO firmware) with animated face expressions and home automation control.",
    longDescription:
      "Jarvis is an ESP32-based voice assistant designed to feel approachable rather than purely functional — it shows animated face expressions while it listens and responds, alongside controlling home automation devices by voice.",
    problem: "Wanted a voice assistant that felt personal and expressive, not just a command interface.",
    approach:
      "Built around an ESP32 running XIAO firmware, paired with a display for animated face expressions, and wired into home automation control.",
    architecture: ["VOICE INPUT", "ESP32 (XIAO FIRMWARE)", "FACE EXPRESSION DISPLAY", "HOME AUTOMATION CONTROL"],
    hardware: ["ESP32 (XIAO)", "Display for face expressions"],
    software: ["XIAO firmware", "Home automation integration"],
    challenges: "",
    result: "A working friendly AI assistant with expressive face animations and voice-controlled home automation.",
    learnings: "",
    technologies: ["ESP32", "XIAO Firmware", "Home Automation", "Voice AI"],
    features: ["Animated face expressions", "Friendly conversational AI", "Home automation control"],
    image: "/images/jarvis-1.jpg",
    gallery: ["/images/jarvis-1.jpg", "/images/jarvis-2.jpg", "/images/jarvis-3.jpg", "/images/jarvis-4.jpg", "/images/jarvis-5.jpg"],
    featured: true,
    size: "medium",
  },
  {
    id: "07",
    number: "07",
    title: "Yani — Voice Assistant",
    slug: "yani-voice-assistant",
    category: "AI / Embedded",
    year: "2025",
    status: "Development",
    description: "A voice assistant built on a Raspberry Pi 4.",
    longDescription:
      "Yani is a voice assistant project built on Raspberry Pi 4, exploring voice interaction on a more compute-capable embedded platform than a microcontroller.",
    problem: "",
    approach: "Built the voice assistant pipeline around the Raspberry Pi 4's compute headroom.",
    architecture: ["VOICE INPUT", "RASPBERRY PI 4", "RESPONSE OUTPUT"],
    hardware: ["Raspberry Pi 4"],
    software: ["Voice assistant pipeline"],
    challenges: "",
    result: "A working voice assistant running on Raspberry Pi 4.",
    learnings: "",
    technologies: ["Raspberry Pi 4", "Voice AI"],
    features: ["Voice-driven interaction"],
    image: "/images/yani-1.jpg",
    gallery: ["/images/yani-1.jpg"],
    featured: true,
    size: "medium",
  },
];
