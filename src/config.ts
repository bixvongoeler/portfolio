export const siteConfig = {
    name: "Bix",
    fullName: "William Bix von Goeler",
    pronouns: "he/him",
    profilePhoto: "/profile.jpeg",
    greeting: "Hey there, 👋",
    title: "Software Engineer & Comp-Sci Undergrad at Tufts",
    description: "portfolio website of William Bix von Goeler",
    accentColor: "#007A6A",
    darkAccentColor: "#00B5A0",
    sectionOrdering: ["about", "experience", "projects", "education", "skills", "hobbies"],
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
        "I'm a Junior studying CS at Tufts University, and am currently interning at Financial Recovery Technologies in Medford, where I'm working on data extraction pipelines and internal tooling.\n I love projects or problem spaces that really allow me to go deep — getting the chance to build a real understanding of the <i>how</i> and <i>why</i> behind the way things work. My interests lean towards systems programming, networking, and recently embedded — though I'm always happy to learn more about any area I encounter.\n I bring a creative perspective to  technical work through my background in audio engineering, including my current part time position running live sound for music events at Tufts. Outside of tech, you'll find me playing guitar, woodworking, producing music, hiking, or snowboarding!",
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
            name: "AI Advisor Injecting MITM-Proxy",
            description:
                "An HTTPS man-in-the-middle proxy written in C that intercepts encrypted web traffic and injects an LLM-powered academic advisor widget into the Tufts student portal (<i>used for course registration, transcripts, etc.</i>). Combines RAG-augmented GPT queries with parsed student transcripts and scraped course catalog data. Containerized with Docker for portable deployment.",
            link: "https://github.com/bixvongoeler/llm_mitm_proxy",
            repo: "llm_mitm_proxy",
            skills: ["C Socket Programming", "Docker", "TLS/SSL", "Proxies", "LLMs", "Python"],
        },
        {
            name: "FPGA Based Guitar Hero Game",
            description:
                "A Guitar Hero inspired rhythm game implemented entirely in SystemVerilog on an iCE40 FPGA. Features VGA graphics output, buffered I2S audio playback from a MicroSD, realtime strum-gated note registration. Uses custom python tools for MIDI to note data conversion and direct writes of processed audio data to MicroSD card sectors.",
            link: "https://github.com/bixvongoeler/es04_guitar_hero",
            repo: "es04_guitar_hero",
            skills: ["SystemVerilog", "FPGA", "I2C", "I2S Audio", "VGA"],
        },
        {
            name: "2D Sand Simulation",
            description:
                "A performant grid-based particle simulation modeling the behavior of sand, water, stone, and gas elements with physics interactions. Uses the RayLib C Graphics Library. Built using a modular OOP architecture with base classes for particle types and a centralized world grid managing the simulation loop.",
            link: "https://github.com/bixvongoeler/sand_sim",
            repo: "sand_sim",
            skills: ["C++", "RayLib", "OOP", "CMake"],
        },
        {
            name: "Graphical AI Robot-Vacuum Sim",
            description:
                "A robot vacuum simulator controlled by a hierarchical behavior tree AI. Features dynamic dust accumulation, battery management with priority-based charging, spot and general cleaning modes, and a real-time GUI visualization of the discrete grid environment.",
            link: "https://github.com/bixvongoeler/roomba_sim",
            repo: "roomba_sim",
            skills: ["Python", "Behavior Trees", "AI", "Pygame"],
        },
    ],
    experience: [
        {
            company: "Financial Recovery Technologies",
            title: "Software Engineering Intern",
            dateRange: "June 2025 - Present",
            current: true,
            bullets: [
                "Automating PDF table extraction with ML libraries to build pipelines for client data intake.",
                "Using Python + SQLite to automate file deduplication, folder name standardization, and legacy file transfers by searching, analyzing, and collecting metrics on terabytes of data over millions of files stored on a secure data drive.",
                "Built automated front end regression tests using Javascript and Cypress to increase code coverage across web application.",
            ],
        },
        {
            company: "Tufts University Music Department",
            title: "Music Event Technical Staff",
            dateRange: "February 2023 - Present",
            current: true,
            bullets: [
                "Multitrack audio/video mixing, recording and post-production for live events in venues seating up to 300 people held at Tufts University covering a variety of genres like folk, classical, jazz, and conference-style events",
            ],
        },
        {
            company: "Amherst Community Coding Program",
            title: "Founder & Director",
            dateRange: "October 2022 – May 2023",
            current: false,
            bullets: [
                "Secured grant funding from the City of Amherst through presentation of a comprehensive project proposal & budget to city Council.",
                "Provided free after-school coding classes where I designed and taught lessons, rented equipment, hired assistants, and communicated with caretakers while teaching programming fundamentals.",
            ],
        },
        {
            company: "Holyoke Codes",
            title: "Teaching Assistant",
            dateRange: "June 2021 – July 2022",
            current: false,
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
