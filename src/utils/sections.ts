import { siteConfig } from "../config";

export interface Section {
    id: string;
    label: string;
    isVisible: boolean;
}

// Map section IDs to their labels and visibility checks
const sectionConfig: Record<string, { label: string; isVisible: () => boolean }> = {
    about: {
        label: "About",
        isVisible: () => !!siteConfig.aboutMe,
    },
    education: {
        label: "Education",
        isVisible: () => !!(siteConfig.education && siteConfig.education.length > 0),
    },
    experience: {
        label: "Experience",
        isVisible: () => !!(siteConfig.experience && siteConfig.experience.length > 0),
    },
    skills: {
        label: "Skills",
        isVisible: () => !!(siteConfig.skillCategories && Object.keys(siteConfig.skillCategories).length > 0),
    },
    projects: {
        label: "Projects",
        isVisible: () => !!(siteConfig.projects && siteConfig.projects.length > 0),
    },
    hobbies: {
        label: "Hobbies",
        isVisible: () => !!(siteConfig.hobbies && siteConfig.hobbies.length > 0),
    },
};

// Get ordered sections with visibility info
export function getOrderedSections(): Section[] {
    const ordering = siteConfig.sectionOrdering || ["about", "education", "experience", "skills", "projects", "hobbies"];

    return ordering
        .filter((id) => sectionConfig[id]) // Only include valid section IDs
        .map((id) => ({
            id,
            label: sectionConfig[id].label,
            isVisible: sectionConfig[id].isVisible(),
        }));
}

// Get only visible sections in order
export function getVisibleSections(): Section[] {
    return getOrderedSections().filter((section) => section.isVisible);
}
