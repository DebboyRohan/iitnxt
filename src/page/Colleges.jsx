import React from "react";

const Colleges = () => {
  const serviceOfferings = [
    {
      title: "Student centric services",
      points: [
        "Internships & Training Programs",
        "Hackathons & Innovation Challenges",
        "Career Development & Placement Assistance & Training",
        "Student Entrepreneurship Support",
      ],
    },
    {
      title: "College & Institutional Collaboration Services🎓",
      points: [
        "Customized Workshops & Tech Bootcamps",
        "Industry-Academia Connect",
        "Tech Fest & Event Hosting Support",
        "Startup Incubation for Colleges",
      ],
    },
    {
      title: "IT & Software Development Services 💻",
      points: [
        "Customized Web & App Development",
        "Enterprise Software Solutions",
        "Cloud & DevOps Solutions",
        "AI & Data Science Consulting",
      ],
    },
    {
      title: "Marketing & Business Growth Services 📈",
      points: [
        "Branding & Digital Marketing",
        "Graphic Design & UI/UX Services",
        "Business Consulting & Market Research",
        "E-Commerce Solutions",
      ],
    },
    {
      title: "Hardware, Robotics & IoT Services 🤖",
      points: [
        "Product Prototyping & Hardware Consulting",
        "Game Development & AR/VR Solutions",
        "Customized Embedded & IoT product Development",
      ],
    },
  ];

  const domainDetails = [
    {
      domain: "Artificial Intelligence & Machine Learning",
      points: [
        "Generative AI (GANs, Diffusion Models)",
        "Explainable AI & Trustworthy Machine Learning",
        "AI for Healthcare & Biomedical Applications",
        "Reinforcement Learning & Multi-Agent Systems",
        "Edge AI & AI Optimization for IoT",
        "Adversarial Machine Learning & AI Security",
        "Natural Language Processing & Large Language Models (LLMs)",
        "AI for Finance, Stock Market Predictions",
        "AI in Cybersecurity (Threat Detection, Intrusion Prevention)",
        "Ethics and Bias in AI",
        "Computer vision",
      ],
    },
    {
      domain: "Systems Programming & Low-Level Development",
      points: [
        "C & C++ for High-Performance Computing & Embedded Systems",
        "Rust Programming for Secure & Efficient Software",
        "Operating System Development & Kernel Programming",
        "Reverse Engineering & Malware Analysis",
        "Concurrency & Parallel Programming (POSIX Threads, OpenMP,CUDA, OpenCL)",
        "Writing Device Drivers & Bare-Metal Programming",
        "Compilers & Interpreters: LLVM, Clang, GCC, JVM Internals",
        "File System Internals & Storage Optimization Techniques",
        "Assembly Language & Exploit Development",
      ],
    },
    {
      domain: "Cloud Computing & DevOps",
      points: [
        "Infrastructure as Code (Terraform, AWS CloudFormation, Pulumi)",
        "Cloud Providers (AWS, Google Cloud, Azure, DigitalOcean, Vercel, Netlify)",
        "Containerization & Kubernetes (K8s, Docker Swarm, Istio, OpenShift)",
        "CI/CD Pipelines & GitOps (Jenkins, GitHub Actions, ArgoCD, FluxCD)",
        "Serverless Architecture & Microservices (AWS Lambda, Google Functions)",
        "Hybrid & Multi-Cloud Deployment Strategies",
        "Site Reliability Engineering (SRE) & Performance Optimization",
        "Chaos Engineering & Fault-Tolerant Systems",
        "Cloud Security & Compliance (SOC2, GDPR, ISO 27001)",
        "AI-Driven DevOps & MLOps (Machine Learning Deployment Pipelines",
      ],
    },
    {
      domain: "Internet of Things (IoT) & Embedded Systems",
      points: [
        "Industrial IoT & Smart Factory Automation",
        "Low-Power Edge AI & TinyML",
        "IoT Protocols & Network Security",
        "Smart Cities & Intelligent Transportation Systems",
        "Healthcare IoT & Wearable Tech Innovations",
        "Drone Technology & Autonomous Systems",
        "5G & Next-Generation IoT Networks",
        "Robotics & IoT in Agriculture",
        "Real-Time Operating Systems (RTOS) for IoT Devices",
        "Sensor Fusion & IoT Data Analytics",
      ],
    },
    {
      domain: "PCB Design & Circuit Simulation",
      points: [
        "Introduction to PCB Design & Fabrication Process",
        "Schematic Design & Circuit Simulation (LTSpice, Proteus, Multisim, TINA-TI)",
        "PCB Layout & Design Tools (KiCad, Altium Designer, Eagle, EasyEDA, OrCAD)",
        "High-Speed PCB Design & Signal Integrity Analysis",
        "Multilayer PCB Design & RF PCB Design (Antenna, RF Filters, Wireless Circuits)",
        "PCB Prototyping & Manufacturing (Gerber Files, SMT, THT, PCB Assembly)",
        "Designing Power Electronics Circuits (SMPS, Buck/Boost Converters, Inverters)",
        "PCB Design for IoT & Embedded Systems",
        "Flexible PCBs, Rigid-Flex PCBs & 3D PCB Design",
        "EMI/EMC Testing & Compliance for PCB Design",
      ],
    },
    {
      domain: "VLSI & Embedded Systems",
      points: [
        "AI/ML Accelerators in VLSI",
        "3D ICs & Advanced Packaging Techniques",
        "FPGA-based System Design & Acceleration",
        "Secure Hardware Architectures & Trusted Execution Environments",
        "Low-Power & Energy-Efficient Circuit Design",
        "High-Speed Interconnects & Network-on-Chip (NoC)",
        "Quantum Computing Hardware & Emerging Nanodevices",
        "Edge Computing for Embedded AI Systems",
        "ASIC & SoC Design for Real-Time Applications",
        "Analog & Mixed-Signal IC Design",
      ],
    },
    {
      domain: "Full-Stack Web & App Development",
      points: [
        "AI-Powered Web Development (AutoML, GPT Integration)",
        "Progressive Web Apps (PWA) & Microservices Architecture",
        "Secure Web Development & API Security",
        "Blockchain in Web Development (Web3, dApps)",
        "Real-Time Data Processing with WebSockets & Kafka",
        "AR/VR-Based Web Applications",
        "Serverless Computing & Cloud-Native Web Development",
        "Scalable Multi-Tenant SaaS Architectures",
        "JAMstack & Headless CMS Frameworks",
        "No-Code/Low-Code Development Platforms",
      ],
    },
    {
      domain: "Robotics & Automation",
      points: [
        "Basic to Advanced Robotics Concepts (Kinematics, Dynamics, Motion Planning)",
        "Building Autonomous Robots (Obstacle Avoidance, Line Following, SLAM, ROS)",
        "Humanoid & Quadruped Robotics (Boston Dynamics-Type Robots, Bipedal Gait Analysis)",
        "Drone Technology (Quadcopters, Fixed-Wing UAVs, Drone Control Systems)",
        "AI in Robotics (Computer Vision, Reinforcement Learning, RobotPerception)",
        "Swarm Robotics & Multi-Agent Systems",
        "Soft Robotics & Bio-Inspired Robotics (Artificial Muscles, Smart Materials)",
        "Industrial Robotics (SCARA, Delta, Articulated Robots, PLC Automation)",
        "Haptic Feedback & Tactile Sensing for Robotics",
      ],
    },
    {
      domain: "Business Development & Digital Marketing",
      points: [
        "Empowering the Innovators of Tomorrow",
        "AI in Marketing & Customer Analytics",
        "Growth Hacking & Data-Driven Business Models",
        "Metaverse & Virtual Marketing Strategies",
        "E-commerce Optimization & Personalization Techniques",
        "Blockchain for Supply Chain Transparency",
        "Influencer Marketing & Brand Strategy",
        "Pricing Optimization with AI & Machine Learning",
        "Behavioral Economics & Consumer Psychology",
        "Data Monetization & Subscription Business Models",
        "Sustainability & Green Marketing Strategies",
      ],
    },
    {
      domain: "Digital Content Creation & 3D Design",
      points: [
        "AI-Assisted Video Editing & Deepfake Technology",
        "3D Animation for Interactive Storytelling",
        "Virtual Production & AI-Generated CGI",
        "Augmented Reality (AR) & Interactive Media",
        "Generative Design & AI-Based Art",
        "Digital Twin Technology & Virtual Simulations",
        "Real-Time Graphics Rendering for Game Development",
        "NFT & Digital Asset Monetization",
        "Content Personalization & AI-Based Recommendations",
        "AI for Speech & Audio Processing",
      ],
    },
    {
      domain: "Stock Market & Financial Analytics",
      points: [
        "AI-Based Algo Trading & Predictive Analytics",
        "Sentiment Analysis for Market Trends",
        "Cryptocurrency & DeFi Investment Strategies",
        "Quantitative Finance & Risk Modeling",
        "Portfolio Optimization with Machine Learning",
        "Behavioral Finance & Decision Science",
        "High-Frequency Trading & Automated Market Making",
        "Impact of AI & Blockchain on Financial Systems",
        "Regulatory Compliance & Financial Data Security",
        "Credit Scoring & AI-Based Fraud Detection",
      ],
    },
    {
      domain: "Mechanical Engineering & Product Design",
      points: [
        "CAD & 3D Modeling (Fusion 360, SolidWorks, AutoCAD)",
        "Generative Design & AI in Product Development",
        "Finite Element Analysis (FEA) & Computational Fluid Dynamics (CFD)",
        "Reverse Engineering & Rapid Prototyping",
        "Vehicle Dynamics & Automotive Engineering",
      ],
    },
    {
      domain: "Game Development & Interactive Technologies",
      points: [
        "Game Engine Basics (Unity, Unreal Engine)",
        "AI in Game Development (Pathfinding, NPC Behavior, Generative AI for Levels)",
        "3D Character Modeling & Animation",
        "Game Physics & Real-Time Rendering",
        "Augmented Reality (AR) & Virtual Reality (VR) in Gaming",
        "Procedural Content Generation for Games",
        "Multiplayer Game Development & Cloud Gaming",
        "Blockchain & NFTs in Gaming (Play-to-Earn Models)",
        "Gamification & Serious Game Design for Education",
        "Human-Computer Interaction (HCI) & UX for Games",
      ],
    },
    {
      domain: "Advanced Manufacturing & Smart Industry 4.0",
      points: [
        "CNC Machining & Digital Manufacturing",
        "Smart Sensors & IoT in Manufacturing",
        "AI & Predictive Maintenance for Industry 4.0",
        "Digital Twin Technology in Manufacturing",
        "Robotics & Autonomous Systems for Industrial Applications",
        "Supply Chain 4.0 & Data-Driven Logistics",
        "Cyber-Physical Systems in Manufacturing",
        "Smart Materials & Shape Memory Alloys",
        "Quality Control & Six Sigma in Manufacturing",
        "Sustainable & Circular Manufacturing",
      ],
    },
    {
      domain: "Aerospace & Automotive Engineering",
      points: [
        "Electric & Hybrid Vehicles (EV Powertrain Design, Battery Tech & BMS)",
        "Autonomous Vehicles & ADAS (Advanced Driver Assistance Systems)",
        "Hyperloop & High-Speed Transportation Technologies",
        "Urban Air Mobility (Flying Cars & eVTOL Vehicles)",
        "Rocket Propulsion & Spacecraft Systems Engineering",
        "Aerodynamics Optimization with AI & ML",
        "Composite Materials & Lightweight Structures for Aerospace",
        "Space Mining & Astrobiology Technologies",
        "Swarm Robotics for Space Exploration",
        "Next-Gen Satellites & CubeSat Development",
      ],
    },
    {
      domain: "Quantum Computing & Advanced Computation",
      points: [
        "Quantum Algorithms & Programming (Qiskit, Cirq, Braket)",
        "Quantum Cryptography & Post-Quantum Security",
        "Superconducting Qubits & Quantum Hardware",
        "Quantum Machine Learning & Optimization",
        "Neuromorphic Computing & Brain-Inspired AI",
        "Edge Computing & AI on IoT Devices",
        "High-Performance Computing (HPC) for AI & Simulations",
        "Computational Neuroscience & AI-driven Cognitive Models",
        "AI-Accelerated Materials Discovery",
        "Holographic Data Storage & Next-Gen Memory Technologies",
      ],
    },
    {
      domain: "Bioengineering & Biomedical Innovation",
      points: [
        "Bionics & Prosthetics (AI-Enabled Prosthetic Limbs)",
        "Neural Interfaces & Brain-Computer Interaction (BCI)",
        "AI in Drug Discovery & Personalized Medicine",
        "Tissue Engineering & 3D Bioprinting",
        "Wearable Health Devices & Smart Implants",
        "Synthetic Biology & CRISPR Gene Editing",
        "Microfluidics & Lab-on-a-Chip Technologies",
        "Biomechanics & Sports Science Innovations",
        "AI in Medical Imaging & Diagnostics",
        "Nanomedicine & Targeted Drug Delivery Systems",
      ],
    },
    {
      domain: "Sustainable & Green Technologies",
      points: [
        "Empowering the Innovators of Tomorrow",
        "Bionics & Prosthetics (AI-Enabled Prosthetic Limbs)",
        "Neural Interfaces & Brain-Computer Interaction (BCI)",
        "AI in Drug Discovery & Personalized Medicine",
        "Tissue Engineering & 3D Bioprinting",
        "Wearable Health Devices & Smart Implants",
        "Synthetic Biology & CRISPR Gene Editing",
        "Microfluidics & Lab-on-a-Chip Technologies",
        "Biomechanics & Sports Science Innovations",
        "AI in Medical Imaging & Diagnostics",
        "Nanomedicine & Targeted Drug Delivery Systems",
      ],
    },
    {
      domain: "Sustainable & Green Technologies",
      points: [
        "Carbon Capture, Utilization & Storage (CCUS)",
        "Hydrogen Economy & Green Hydrogen Fuel Cells",
        "Energy Harvesting & Self-Powered Electronics",
        "Perovskite & Organic Solar Cells",
        "Smart Grids & AI-Optimized Energy Systems",
        "Circular Economy & Waste-to-Energy Technologies",
        "Biodegradable Plastics & Sustainable Packaging",
        "AI-Driven Climate Modeling & Disaster Prediction",
        "Smart Agriculture & AI in Precision Farming",
        "Eco-Friendly Building Materials & Smart Cities",
      ],
    },
    {
      domain:
        "Advanced Cybersecurity , Digital Forensics Ethical Hacking for Developers",
      points: [
        "AI-Driven Cybersecurity Threat Detection",
        "Quantum-Resistant Cryptography & Blockchain Security",
        "Dark Web Analysis & Cybercrime Investigations",
        "Digital Twin Security & Cyber-Physical Systems (CPS) Security",
        "5G & 6G Network Security Risks & Solutions",
        "Automotive & IoT Device Security",
        "Cybersecurity in Space & Satellite Communications",
        "AI-Powered Phishing & Fraud Detection",
        "Ethical Hacking & Bug Bounty Hunting",
        "Privacy-Preserving AI & Federated Learning for Security",
      ],
    },
    {
      domain: "Blockchain & Decentralized Technologies",
      points: [
        "Decentralized Finance (DeFi) & Smart Contracts",
        "AI-Powered Blockchain Analytics & Fraud Detection",
        "NFTs & Web3 Business Models",
        "Cross-Chain Interoperability & Layer-2 Scaling Solutions",
        "DAO (Decentralized Autonomous Organizations) Governance Models",
        "Decentralized Identity & Digital Credentials",
        "Zero-Knowledge Proofs & Privacy-Preserving Transactions",
        "Blockchain in Supply Chain & Logistics",
        "Tokenized Real Estate & Digital Asset Management",
        "Green Blockchain Technologies & Sustainable Mining Solutions",
      ],
    },
    {
      domain: "Human-Computer Interaction (HCI) & Creative Technologies",
      points: [
        "Designing Smart Wearables (Smartwatches, Fitness Trackers, Smart",
        "Glasses, Smart Rings)",
        "Brain-Computer Interfaces (BCI) & Neural Interfaces",
        "Haptics & Tactile Feedback for Virtual & Augmented Reality",
        "Flexible & Stretchable Electronics for Wearables",
      ],
    },
    {
      domain: "Power Electronics & Renewable Energy Systems",
      points: [
        "Designing Inverters, Rectifiers & DC-DC Converters",
        "Solar Energy Systems (MPPT, Grid-Tie Inverters, Battery Storage Systems)",
        "Electric Vehicles & Charging Infrastructure (BMS, Motor Controllers, Fast Chargers)",
        "Wireless Power Transfer & Inductive Charging",
        "Smart Grids & IoT in Energy Management",
      ],
    },
  ];
  return (
    <div className="schools-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-welcome">Welcome to IITNxt</p>
          <h1 className="hero-title">Empowering the Innovators of Tomorrow</h1>
          <div className="hero-buttons">
            <button className="cta-button">Explore Programs</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Workshops with Impact</h3>
            <p>
              Each workshop is carefully crafted to ensure practical, hands-on
              experience with real-world applications. The learning goes beyond
              theoretical concepts – you will work on projects that matter.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Internship Opportunities</h3>
            <p>
              Performance in workshops opens the door to internships that give
              you real-world exposure and career-building experience.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Performance-Based Transitions</h3>
            <p>
              Performance in both workshops and internships is continuously
              evaluated. The better you perform, the more opportunities you
              unlock. You may move to a higher internship category based on your
              contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Service Offerings */}
      <section className="service-offerings">
        <h2 className="section-title">Our Service Offerings</h2>
        <div className="services-grid">
          {serviceOfferings.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <ul>
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Domains Details */}
      <section className="domains-section">
        <h2 className="section-title">
          Detailed Expert-Curated Topics Aligned with Global Research & Industry
          Trends
        </h2>
        <p className="section-subtitle">
          Research-Backed Training from Esteemed Academicians
        </p>
        <div className="domains-grid">
          {domainDetails.map((domain, index) => (
            <div className="domain-card" key={index}>
              <h3>{domain.domain}</h3>
              <ul>
                {domain.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Colleges;
