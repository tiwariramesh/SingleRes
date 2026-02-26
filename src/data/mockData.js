export const profile = {
    firstName: "Ramesh",
    lastName: "Tiwari.",
    title: "Agile Project Manager",
    subtitle: "Certified Project Management Professional (PMP®) & Project Management Trainer",
    bio: "Experienced <span class='text-pmi-blue dark:text-blue-400 font-bold'>Project Management professional</span> with a background in delivering high-impact VET training and leading cross-functional software teams. Specialising in <span class='text-pmi-blue dark:text-blue-400 font-bold'>business-driven Agile practices</span>, strategic project delivery, and outcomes-focused coaching.",
    profilePhoto: {
        url: "https://media.licdn.com/dms/image/v2/D5603AQHkpFjntA0Mxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712807361458?e=1773273600&v=beta&t=uCFvhR9kS3QeyOJjTXdnzxoSdGo0kX_KPOG0w2MCwDw"
    }
};

export const careerJourneyTimeline = [
    { year: "2016", label: "Developer", order: 1 },
    { year: "2019", label: "Business Analyst", order: 2 },
    { year: "2020", label: "ICT Project Manager", order: 3 },
    { year: "2024", label: "PM Trainer", order: 4 }
];

export const experiences = [
    {
        id: 1,
        company: "National Institute of Technology, Perth",
        role: "Business & Project Management Trainer",
        startDate: "2024-04-20",
        endDate: null,
        description: [
            "Leading strategic agile transformations across the enterprise.",
            "Optimising delivery pipelines and cross-functional team collaboration."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHZyih_N7qjvDOR7SoGw1SJUHGsNS6vQ3Eg&s",
        order: 1,
        color: "#a6ce39"
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
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGW2mdMPhlOjA/company-logo_200_200/company-logo_200_200/0/1696567947115/lftechnology_logo?e=2147483647&v=beta&t=qjcDszw5d-LFTJC7z4dnyCz4haXexpw4RkS1-gqm7EI",
        order: 2,
        color: "#048e43"
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
        logo: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/esewa_20200118185351.jpg",
        order: 3,
        color: "#61bc47"
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
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE9yrbRT87Kyw/company-logo_200_200/company-logo_200_200/0/1696484560023/cloudfactory_nepal_logo?e=2147483647&v=beta&t=2oXHqykX8UCsPNyavt8q-X_SZ3pYTUQMk8TGyRfNUxM",
        order: 4,
        color: "#2596be"
    }
];

export const services = [
    {
        id: 1,
        title: "Agile Transformation",
        description: "I coach teams in transitioning to Agile frameworks, ensuring high-value integration of activities within scope and quality standards.",
        category: "Strategy",
        icon: "Zap",
        bg: "bg-blue-100",
        color: "text-blue-600",
        order: 1
    },
    {
        id: 2,
        title: "Strategic Project Delivery",
        description: "Leveraging a background in Information Technology, Business and Project Management, I translate complex technical requirements into achievable project roadmaps.",
        category: "Delivery",
        icon: "Briefcase",
        bg: "bg-green-100",
        color: "text-green-600",
        order: 2
    },
    {
        id: 3,
        title: "Capability Building",
        description: "Through my experience as a VET trainer, I empower teams and individuals with the practical skills needed to navigate evolving industry needs.",
        category: "Growth",
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
        title: "Master of Project Management",
        name: "Project Management",
        institution: "Curtin University",
        location: "Perth, Australia",
        year: "2022",
        order: 1,
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Curtin_University_Crest.jpg/250px-Curtin_University_Crest.jpg"
        }
    },
    {
        id: 2,
        title: "Master of Business Administration in IT",
        name: "MBA IT",
        institution: "Tribhuvan University",
        location: "Kathmandu, Nepal",
        year: "2017",
        order: 2,
        image: {
            url: "https://portal.tu.edu.np/medias/Tribhuvan_University_logo.svg_2023_10_05_16_11_41.png"
        }
    },
    {
        id: 3,
        title: "Bachelor of Computer Engineering",
        name: "Computer Engineering",
        institution: "Kathmandu University",
        location: "Dhulikhel,Nepal",
        year: "2012",
        order: 3,
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Kathmandu_University_Logo.svg/250px-Kathmandu_University_Logo.svg.png"
        }
    }
];

export const certifications = [
    {
        id: 1,
        name: "PMP®",
        role: "Project Management",
        issuer: "Project Management Institute",
        year: "2026",
        link: "https://www.credly.com/badges/94a20fb6-0cc4-47a5-9c10-f9541b7a9e65",
        description: "Project Management Professional",
        order: 1,
        logo: {
            url: "https://images.credly.com/images/731e7ef4-9b0c-4d7b-ab65-23cc699c0aa3/blob"
        }
    },
    {
        id: 2,
        name: "CAPM®",
        role: "Certified Associate Project Manager",
        issuer: "Project Management Institute",
        year: "2025",
        link: "https://www.credly.com/badges/94a20fb6-0cc4-47a5-9c10-f9541b7a9e65",
        description: "Certified Associate Project Manager",
        order: 2,
        logo: {
            url: "https://images.credly.com/size/680x680/images/80c95f74-dcf0-43fc-a437-053a598feb05/blob"
        }
    },
    {
        id: 3,
        name: "CSPO®",
        role: "Certified Scrum Product Owner",
        issuer: "Scrum Alliance",
        year: "2019",
        link: "#",
        description: "Certified Scrum Product Owner",
        order: 3,
        logo: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoH1_3M84_iC7rOVk21LMjYDySTdg36ejWKw&s"
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
