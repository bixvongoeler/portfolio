export const siteConfig = {
    name: "Bix",
    fullName: "William Bix von Goeler",
    pronouns: "",
    profilePhoto: "/profile.jpeg",
    greeting: "Hey there, 👋",
    title: "Software Engineer & Comp-Sci Undergrad at Tufts",
    description: "portfolio website of William Bix von Goeler",
    accentColor: "#007A6A",
    darkAccentColor: "#00B5A0",
    sectionOrdering: ["about", "experience", "projects", "education", "skills"],
    // Card tilt effect settings (desktop only)
    tiltEffect: {
        enabled: true,
        max: 3, // max tilt rotation in degrees
        speed: 750, // transition speed in ms
        perspective: 3000, // transform perspective
    },
    social: {
        email: "bixvongoeler@gmail.com",
        linkedin: "https://www.linkedin.com/in/bix-von-goeler-60ba5b236/",
        github: "https://github.com/bixvongoeler",
    },
    aboutMe:
        "I'm a Senior studying CS at Tufts University, and just wrapped up at Delsys, a wearable-sensor company in Natick, where I worked as an R&D Embedded Software Engineer Intern writing embedded C++ for a field-deployed bio-sensing and communication platform under active research.\n I love projects or problem spaces that really allow me to go deep — getting the chance to build a real understanding of the <i>how</i> and <i>why</i> behind the way things work. My interests lean towards systems programming, networking, and recently embedded — though I'm always happy to learn more about any area I encounter.\n I bring a creative perspective to  technical work through my background in audio engineering, including my current part time position running live sound for music events at Tufts. Outside of tech, you'll find me playing guitar, woodworking, producing music, hiking, or snowboarding!",
    skillCategories: {
        languages: ["C", "C++", "Python", "SQL", "JavaScript", "Bash/Shell", "SystemVerilog"],
        toolsAndLibraries: [
            "Linux",
            "Git",
            "Docker",
            "CMake/Makefiles",
            "SQLite",
            "Github/Azure-DevOps",
            "TCP/UDP Socket Programming",
            "AWS",
            "Cypress",
            "RayLib",
            "Azure",
            "OpenAI API",
            "Anthropic-Console",
            "Gemini API",
            "Jira",
            "Arduino/ESP-32",
            "FPGAs",
            "Embedded",
            "Adobe Suite",
            "Pro Level Multimedia Editing",
        ],
    },
    projects: [
        {
            name: "AI Advisor Widget Injected by C MITM-Proxy Server",
            summary:
                "An LLM-powered academic advisor injected into the Tufts student portal by a custom C MITM-proxy that spoofs TLS certificates to intercept encrypted traffic. A Python backend injects the widget and answers questions using RAG over a database of scraped Tufts course data.",
            description:
                "Injects an LLM-powered academic advisor widget into the Tufts student portal by intercepting encrypted HTTPS traffic through a custom C mitm-proxy server. The proxy has a non-blocking `libev` based architecture allowing for simultaneous connections, and spoofs TLS certificates as a CA to read and modify the encrypted traffic. Intercepted pages are sent over Unix sockets to a Python server that injects the widget's JavaScript and handles backend requests. A *gpt-4.1-mini* agent answers student questions using RAG queries against a database of structured Tufts course summaries scraped from official sources. Uploaded PDF transcripts are parsed into structured JSON (e.g. GPA, major, lists of courses taken) using a seperate LLM and appended to the system prompt, while info from the users current page is parsed from the intercepted HTML using BeautifulSoup and included in each message for contextually relevant responses. Containerized with Docker for portable deployment.",
            image: "/projects/mitm-proxy.png",
            link: "https://github.com/bixvongoeler/llm_mitm_proxy",
            repo: "llm_mitm_proxy",
            skills: ["C Socket Programming", "Docker", "TLS/SSL", "Proxies", "LLMs", "Python"],
        },
        {
            name: "Chordian: An Electric MIDI Accordion",
            summary:
                "A wireless MIDI accordion built around dual ESP32s communicating over ESP-NOW, with soft-pot keys and time-of-flight bellows sensing. Battery powered and self-contained in laser-cut acrylic, streaming to Max/MSP for MIDI conversion.",
            description: "A wireless MIDI accordion built around dual ESP32 microcontrollers communicating via ESP-NOW. An Arduino Mega handles analog reads from 8 keys with soft potentiometers and FSRs, while the ESP32 processes and transmits TOF-based bellows data to a Max/MSP patch for MIDI conversion. Self-contained with battery power and laser-cut acrylic construction.",
            image: "/projects/chordian.png",
            link: "https://github.com/bixvongoeler/chordian",
            repo: "chordian",
            skills: ["Arduino", "ESP32", "I2C", "Embedded", "MIDI", "Wireless"],
        },
        {
            name: "2D Sand Simulation",
            summary:
                "A performant grid-based particle simulation of sand, water, stone, and gas with physics interactions, rendered with the RayLib C graphics library. Built on a modular OOP architecture with a centralized world grid driving the simulation loop.",
            description:
                "A performant grid-based particle simulation modeling the behavior of sand, water, stone, and gas elements with physics interactions. Uses the RayLib C Graphics Library. Built using a modular OOP architecture with base classes for particle types and a centralized world grid managing the simulation loop.",
            image: "/projects/sand-sim.png",
            link: "https://github.com/bixvongoeler/sand_sim",
            repo: "sand_sim",
            skills: ["C++", "RayLib", "OOP", "CMake"],
        },
        {
            name: "FPGA Based Guitar Hero Game",
            summary:
                "A Guitar Hero inspired rhythm game implemented entirely in SystemVerilog on an iCE40 FPGA, with VGA graphics and buffered I2S audio playback from MicroSD. Custom Python tools convert MIDI into note data and write processed audio directly to SD card sectors.",
            description:
                "A Guitar Hero inspired rhythm game implemented entirely in SystemVerilog on an iCE40 FPGA. Features VGA graphics output, buffered I2S audio playback from a MicroSD, realtime strum-gated note registration. Uses custom python tools for MIDI to note data conversion and direct writes of processed audio data to MicroSD card sectors.",
            image: "/projects/guitar-hero.png",
            link: "https://github.com/bixvongoeler/es04_guitar_hero",
            repo: "es04_guitar_hero",
            skills: ["SystemVerilog", "FPGA", "I2C", "I2S Audio", "VGA"],
        },
        {
            name: "Graphical AI Robot-Vacuum Sim",
            summary:
                "A robot vacuum simulator driven by a hierarchical behavior-tree AI, featuring dynamic dust accumulation and priority-based battery management. A real-time GUI visualizes cleaning behavior across the discrete grid environment.",
            description:
                "A robot vacuum simulator controlled by a hierarchical behavior tree AI. Features dynamic dust accumulation, battery management with priority-based charging, spot and general cleaning modes, and a real-time GUI visualization of the discrete grid environment.",
            image: "/projects/roomba-sim.png",
            link: "https://github.com/bixvongoeler/roomba_sim",
            repo: "roomba_sim",
            skills: ["Python", "Behavior Trees", "AI", "Pygame"],
        },
    ],
    // Experience section collapse: show `visibleCount` entries initially,
    // with the next entry peeking `peekPx` pixels through a fade-out
    experienceCollapse: {
        enabled: true,
        visibleCount: 2,
        peekPx: 112,
    },
    experience: [
        {
            company: "Delsys",
            title: "R&D Embedded Software Engineer Intern",
            dateRange: "May 2026 - August 2026",
            highlight: true,
            description:
                "Embedded development, testing, and system engineering on a field deployed bio sensing and communication platform under active research:",
            bullets: [
                "Redesigned the interface and implementation of real-time sensor data structures to eliminate race conditions and maximize performance in the device's concurrent embedded C++ software pipeline, validated through on-device profiling and testing infrastructure.",
                "Improved the functionality and reliability of a C++ driver for networked acoustic data streams — ironing out failure cases and alignment bugs, and improving reconnect handling. Integrated and shipped the driver as a new data source in a Windows .NET monitoring app, adding an automated build process resolving existing portability concerns.",
                "Designed a scripted, repeatable multi-router evaluation across four outdoor sites at 5–75 m, measuring sustained throughput, latency, and packet loss against system requirements; my recommendation was adopted into the platform after I presented the analysis.",
                "Built highly configurable on-device tooling to meet the needs of diverse packet-transmission field testing scenarios, streamlining data collection tasks for algorithm development.",
            ],
        },
        {
            company: "Financial Recovery Technologies",
            title: "Software Engineering Intern",
            dateRange: "June 2025 - March 2026",
            highlight: false,
            bullets: [
                "Automating PDF table extraction with ML libraries to build pipelines for client data intake.",
                "Using Python + SQLite to automate file deduplication, folder name standardization, and legacy file transfers by searching, analyzing, and collecting metrics on terabytes of data over millions of files stored on a secure data drive.",
                "Built automated front end regression tests using Javascript and Cypress to increase code coverage across web application.",
            ],
        },
        {
            company: "Tufts University Music Department",
            title: "Music Event Technical Staff",
            dateRange: "February 2023 - March 2026",
            highlight: false,
            bullets: [
                "Multitrack audio/video mixing, recording and post-production for live events in venues seating up to 300 people held at Tufts University covering a variety of genres like folk, classical, jazz, and conference-style events",
            ],
        },
        {
            company: "Amherst Community Coding Program",
            title: "Founder & Director",
            dateRange: "October 2022 – May 2023",
            highlight: false,
            bullets: [
                "Secured grant funding from the City of Amherst through presentation of a comprehensive project proposal & budget to city Council.",
                "Provided free after-school coding classes where I designed and taught lessons, rented equipment, hired assistants, and communicated with caretakers while teaching programming fundamentals.",
            ],
        },
        {
            company: "Holyoke Codes",
            title: "Teaching Assistant",
            dateRange: "June 2021 – July 2022",
            highlight: false,
            bullets: [
                "Designed & taught coding lessons at non-profit tech camp building skills I later utilized to found my own coding program.",
            ],
        },
    ],
    education: [
        {
            school: "BS in Computer Science",
            degree: "Tufts University",
            dateRange: "2023 - 2027 (Expected)",
            achievements: [
                "Dean's List",
                "<b>Relevant Coursework:</b> CS112: Network Systems, CS160: Algorithms, CS40: Machine Structure and Assembly Language Programming, CS131: Artificial Intelligence, CS15: Data Structures, ES4: Intro Digital Circuits, EE14: Embedded Systems, ES95: Electric Instrument Design, Linear Algebra, Calc I/II.",
            ],
        },
    ],
    hobbies: [
        {
            name: "Photography",
            description: ["Landscape and street photography", "Film development and darkroom printing"],
        },
        {
            name: "Music",
            description: ["Guitar and piano player", "Home studio recording and production"],
        },
        {
            name: "Hiking",
            description: ["Trail exploration and backpacking", "Nature photography along the way"],
        },
    ],
};
