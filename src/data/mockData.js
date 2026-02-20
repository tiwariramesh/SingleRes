export const profile = {
    firstName: "Ramesh",
    lastName: "Tiwari.",
    title: "Agile Project Manager",
    subtitle: "Certified Project Management Professional (PMP®) & Project Management Trainer",
    bio: "Experienced <span class='text-pmi-blue dark:text-blue-400 font-bold'>Project Management professional</span> with a background in delivering high-impact VET training and leading cross-functional software teams. Specialising in <span class='text-pmi-blue dark:text-blue-400 font-bold'>business-driven Agile practices</span>, strategic project delivery, and outcomes-focused coaching.",
    heroStats: [
        { value: "5+", label: "Years Experience" },
        { value: "", label: "Projects Delivered" },
        { value: "", label: "Teams Led" }
    ],
    heroBadges: [
        { icon: "Award", sub: "Certified", label: "PMP®" },
        { icon: "Users", sub: "Experienced", label: "PM Trainer" }
    ],
    profilePhoto: {
        url: "https://media.licdn.com/dms/image/v2/D5603AQHkpFjntA0Mxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712807361458?e=1773273600&v=beta&t=uCFvhR9kS3QeyOJjTXdnzxoSdGo0kX_KPOG0w2MCwDw"
    },
    timelineSteps: [
        { year: "2016", label: "Frontend Developer" },
        { year: "2019", label: "Business Analyst" },
        { year: "2020", label: "ICT Project Manager" },
        { year: "2024", label: "Business & Project Management Trainer" }
    ]
};

export const experiences = [
    {
        id: 1,
        company: "National Institute of Technology, Perth",
        role: "Business & Project Management Trainer",
        startDate: "2024-04-20",
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
        company: "Leapfrog Technology, Kathmandu, Nepal",
        role: "ICT Project Manager",
        startDate: "2020-06-20",
        endDate: "2023-07-15",
        description: [
            "Train and assess students in project domains (cost, scope, risk) using Agile and PMBOK methodologies.",
            "Design assessment tools and maintain a hands-on learning environment for industry-standard software like MS Project and Jira."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 2,
        color: "bg-emerald-500",
        textColor: "text-emerald-500"
    },
    {
        id: 3,
        company: "eSewa Limited, Kathmandu, Nepal",
        role: "Business Analyst",
        startDate: "2019-04-01",
        endDate: "2020-06-20",
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
        company: "Cloudfactory, Kathmandu, Nepal",
        role: "Frontend Developer - Intern",
        startDate: "2016-06-01",
        endDate: "2018-09-31",
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
        description: "I coach teams in transitioning to Agile frameworks, ensuring high-value integration of activities within scope and quality standards.",
        icon: "Zap",
        bg: "bg-blue-100",
        color: "text-blue-600",
        order: 1
    },
    {
        id: 2,
        title: "Strategic Project Delivery",
        description: "Leveraging a background in Information Technology, Business and Project Management, I translate complex technical requirements into achievable project roadmaps.",
        icon: "Briefcase",
        bg: "bg-green-100",
        color: "text-green-600",
        order: 2
    },
    {
        id: 3,
        title: "Capability Building",
        description: "Through my experience as a VET trainer, I empower teams and individuals with the practical skills needed to navigate evolving industry needs.",
        icon: "Users",
        bg: "bg-purple-100",
        color: "text-purple-600",
        order: 3
    }
];

export const skills = [
    {
        id: 1,
        title: "Project Practices",
        barColor: "bg-blue-500",
        badge: "",
        order: 1,
        skills: [
            { name: "Project Approaches", desc: "Scrum, Kanban, Agile PM and Hybrid Approach", color: "bg-blue-500" },
            { name: "Standard Practices", desc: "PMBOK 6th/7th Ed, Risk and Scope Management, Schedule and Budget Management", color: "bg-green-500" },
            { name: "Lifecycle Management", desc: "SDLC, Requirement Elicitation, VET Compliance", color: "bg-purple-500" }
        ]
    },
    {
        id: 2,
        title: "Tools & Technology",
        barColor: "bg-orange-500",
        badge: "",
        order: 2,
        skills: [
            { name: "PM Software", desc: "Jira, Confluence, MS Project, Trello", color: "bg-blue-600" },
            { name: "Design & Dev", desc: "Figma, Adobe Suite, Python, Wordpress", color: "bg-blue-400" },
            { name: "Collaboration", desc: "Miro, Slack, Github, Teams", color: "bg-blue-300" }
        ]
    },
    {
        id: 3,
        title: "Professional Skills",
        barColor: "bg-green-500",
        badge: "",
        order: 3,
        skills: [
            { name: "Strategic Problem Solving", desc: "Adaptability & continuous learning", color: "bg-yellow-500" },
            { name: "Team Leadership", desc: "Cross functional coaching and stakeholder engagement", color: "bg-green-400" },
            { name: "Effective Communication", desc: "Technical and business communication,Conflict Resolution & Negotiation", color: "bg-red-500" }
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
        url: "https://linkedin.com/in/iramesh",
        order: 1,
        icon: "Linkedin",
        label: "Connect on LinkedIn",
        showInContact: true
    },
    {
        id: 2,
        platform: "Email",
        url: "mailto:ramestiwarii@gmail.com",
        order: 2,
        icon: "Mail",
        label: "Send an Email",
        showInContact: true
    },
    {
        id: 3,
        platform: "X",
        url: "https://twitter.com/ramesgunner",
        order: 3,
        icon: "X",
        label: "Follow on X",
        showInContact: true
    }
];
