export const profile = {
    firstName: "Ramesh",
    lastName: "Tiwari",
    title: "Agile Project Manager",
    subtitle: "Certified Scrum Master & Product Owner",
    bio: "Results-driven Agile Project Manager with over <span class='text-pmi-blue dark:text-blue-400 font-bold'>10 years</span> of experience leading <span class='text-emerald-600 dark:text-emerald-400 font-bold'>cross-functional teams</span> to deliver complex software solutions. Expert in Scrum, Kanban, and SAFe, with a proven track record of <span class='text-pmi-blue dark:text-blue-400 font-bold'>optimizing workflows</span> and enhancing product value.",
    heroStats: [
        { value: "10+", label: "Years Experience" },
        { value: "50+", label: "Projects Delivered" },
        { value: "15+", label: "Teams Led" }
    ],
    heroBadges: [
        { icon: "Award", sub: "Certified", label: "PMP®" },
        { icon: "Users", sub: "Experienced", label: "PM Trainer" }
    ],
    profilePhoto: {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    timelineSteps: [
        { year: "2016", label: "Early Career" },
        { year: "2019", label: "Project Manager" },
        { year: "2020", label: "Scrum Master" },
        { year: "2024", label: "Senior Lead" }
    ]
};

export const experiences = [
    {
        id: 1,
        company: "Company Alpha",
        role: "Senior Lead",
        startDate: "2024-01-01",
        endDate: null,
        description: [
            "Leading strategic agile transformations across the enterprise.",
            "Optimizing delivery pipelines and cross-functional team collaboration."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 1,
        color: "bg-pmi-blue",
        textColor: "text-pmi-blue"
    },
    {
        id: 2,
        company: "Company Beta",
        role: "Scrum Master",
        startDate: "2020-01-01",
        endDate: "2023-12-31",
        description: [
            "Facilitated agile ceremonies and coached teams on scrum principles.",
            "Resolved complex impediments to maintain high team velocity."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 2,
        color: "bg-emerald-500",
        textColor: "text-emerald-500"
    },
    {
        id: 3,
        company: "Company Gamma",
        role: "Project Manager",
        startDate: "2019-01-01",
        endDate: "2019-12-31",
        description: [
            "Managed project schedules, budgets, and stakeholder communication.",
            "Delivered key software products on time and within scope."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 3,
        color: "bg-amber-500",
        textColor: "text-amber-500"
    },
    {
        id: 4,
        company: "Company Delta",
        role: "Early Career Role",
        startDate: "2016-01-01",
        endDate: "2018-12-31",
        description: [
            "Contributed to project planning and execution in a fast-paced environment.",
            "Gained foundational experience in project coordination and agile basics."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 4,
        color: "bg-purple-500",
        textColor: "text-purple-500"
    }
];

export const services = [
    {
        id: 1,
        title: "Agile Transformation",
        description: "Guiding organizations through their Agile adoption journey with tailored frameworks and coaching.",
        icon: "Zap",
        bg: "bg-blue-100",
        color: "text-blue-600",
        order: 1
    },
    {
        id: 2,
        title: "Project Management",
        description: "End-to-end project management ensuring on-time, on-budget delivery with high quality standards.",
        icon: "Briefcase",
        bg: "bg-green-100",
        color: "text-green-600",
        order: 2
    },
    {
        id: 3,
        title: "Team Coaching",
        description: "Empowering teams to self-organize, collaborate effectively, and continuously improve.",
        icon: "Users",
        bg: "bg-purple-100",
        color: "text-purple-600",
        order: 3
    }
];

export const skills = [
    {
        id: 1,
        title: "Methodologies",
        barColor: "bg-blue-500",
        badge: "Expert",
        order: 1,
        skills: [
            { name: "Scrum", desc: "Framework mastery", color: "bg-blue-500" },
            { name: "Kanban", desc: "Flow optimization", color: "bg-green-500" },
            { name: "SAFe", desc: "Enterprise scaling", color: "bg-purple-500" }
        ]
    },
    {
        id: 2,
        title: "Tools",
        barColor: "bg-orange-500",
        badge: "Proficient",
        order: 2,
        skills: [
            { name: "JIRA", desc: "Project tracking", color: "bg-blue-600" },
            { name: "Confluence", desc: "Documentation", color: "bg-blue-400" },
            { name: "Trello", desc: "Task management", color: "bg-blue-300" }
        ]
    },
    {
        id: 3,
        title: "Soft Skills",
        barColor: "bg-green-500",
        badge: "Advanced",
        order: 3,
        skills: [
            { name: "Leadership", desc: "Team motivation", color: "bg-yellow-500" },
            { name: "Communication", desc: "Clear articulation", color: "bg-green-400" },
            { name: "Problem Solving", desc: "Analytical thinking", color: "bg-red-500" }
        ]
    }
];

export const educations = [
    {
        id: 1,
        title: "Master of Business Administration",
        name: "Project Management",
        institution: "University of Tech",
        year: "2014",
        order: 1,
        image: {
            url: "https://placehold.co/100x100/2563eb/ffffff?text=MBA"
        }
    },
    {
        id: 2,
        title: "Bachelor of Science",
        name: "Computer Science",
        institution: "State University",
        year: "2012",
        order: 2,
        image: null
    }
];

export const certifications = [
    {
        id: 1,
        name: "PMP",
        role: "Project Management Professional",
        year: "2018",
        link: "https://www.pmi.org",
        order: 1,
        logo: {
            url: "https://placehold.co/80x80/2d3748/ffffff?text=PMP"
        }
    },
    {
        id: 2,
        name: "CSM",
        role: "Certified Scrum Master",
        year: "2016",
        link: "https://www.scrumalliance.org",
        order: 2,
        logo: {
            url: "https://placehold.co/80x80/2d3748/ffffff?text=CSM"
        }
    }
];

export const socialLinks = [
    {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/rameshtiwari",
        order: 1,
        icon: "Linkedin",
        label: "Connect on LinkedIn",
        showInContact: true
    },
    {
        id: 2,
        platform: "Email",
        url: "mailto:contact@rameshtiwari.com",
        order: 2,
        icon: "Mail",
        label: "Send an Email",
        showInContact: true
    },
    {
        id: 3,
        platform: "Twitter",
        url: "https://twitter.com/rameshtiwari",
        order: 3,
        icon: "Twitter",
        label: "Follow on Twitter",
        showInContact: true
    }
];
