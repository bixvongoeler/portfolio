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
        "I'm a Junior studying CS at Tufts University, and am currently interning at Financial Recovery Technologies in Medford, where I'm working on data extraction pipelines and internal tooling.\n I love projects or problem spaces that really allow me to go deep — getting the chance to build a real understanding of the how and why behind the way things work. My interests lean towards systems programming, networking, and recently embedded—though I'm always happy to learn more about any area I encounter.\n I bring a creative perspective to my technical work through my background in audio engineering, including my current part time position running live sound for music events at Tufts. Outside of tech, you'll find me playing guitar, woodworking, producing music, hiking, or snowboarding.",
    // Legacy skills array - kept for reference but replaced by skillCategories
    skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
    skillCategories: {
        languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
        frameworks: ["React", "Node.js", "Astro", "Next.js", "Express"],
        tools: ["Docker", "AWS", "Git", "PostgreSQL", "MongoDB"],
    },
    projects: [
        {
            name: "AI Dev Roundup Newsletter",
            description:
                "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
            link: "https://aidevroundup.com/?ref=devportfolio",
            repo: "ai-dev-roundup", // GitHub repo name (optional)
            skills: ["React", "Node.js", "AWS"],
        },
        {
            name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
            description:
                "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
            link: "https://fullstackextensions.com/?ref=devportfolio",
            repo: "chrome-extension-mastery",
            skills: ["React", "Node.js", "AWS"],
        },
        {
            name: "ExtensionKit",
            description:
                "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
            link: "https://extensionkit.io/?ref=devportfolio",
            repo: "extension-kit",
            skills: ["React", "Node.js", "AWS"],
        },
    ],
    experience: [
        {
            company: "Tech Company",
            title: "Senior Software Engineer",
            dateRange: "Jan 2022 - Present",
            current: true,
            bullets: [
                "Led development of microservices architecture serving 1M+ users",
                "Reduced API response times by 40% through optimization",
                "Mentored team of 5 junior developers",
            ],
        },
        {
            company: "Startup Inc",
            title: "Full Stack Developer",
            dateRange: "Jun 2020 - Dec 2021",
            current: false,
            bullets: [
                "Built and launched MVP product from scratch using React and Node.js",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Collaborated with product team to define technical requirements",
            ],
        },
        {
            company: "Digital Agency",
            title: "Frontend Developer",
            dateRange: "Aug 2018 - May 2020",
            current: false,
            bullets: [
                "Developed responsive web applications for 20+ clients",
                "Improved site performance scores by 35% on average",
                "Introduced modern JavaScript frameworks to legacy codebases",
            ],
        },
    ],
    education: [
        {
            school: "University Name",
            degree: "Bachelor of Science in Computer Science",
            dateRange: "2014 - 2018",
            achievements: [
                "Graduated Magna Cum Laude with 3.8 GPA",
                "Dean's List all semesters",
                "President of Computer Science Club",
            ],
        },
        {
            school: "Online Platform",
            degree: "Full Stack Development Certificate",
            dateRange: "2019",
            achievements: [
                "Completed 500+ hours of coursework",
                "Built 10+ portfolio projects",
                "Specialized in React and Node.js",
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
