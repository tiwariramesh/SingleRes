export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register() { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    try {
      // 1. Seed Profile
      const profile = await strapi.entityService.findMany('api::profile.profile');

      const profileData = {
        firstName: 'Ramesh',
        lastName: 'Tiwari',
        initials: 'RT',
        title: 'Agile Project Manager',
        subtitle: 'Adaptive Teams. Reliable Delivery.',
        bio: 'Senior Agile Project Manager transforming complex delivery challenges into streamlined high-performing teams, specializing in FinTech, Media and Scrum methodologies.',
        email: 'meet.atutgorkhali@gmail.com',
        heroStats: [
          { label: "Years Exp.", value: "10+" },
          { label: "Projects", value: "50+" },
          { label: "Success", value: "99%" }
        ],
        heroBadges: [
          { label: "PMP Professional", sub: "Certified", icon: "BadgeCheck" },
          { label: "Vocational Trainer", sub: "Experienced", icon: "Trophy" }
        ],
        timelineSteps: [
          { year: '2012', label: 'Student', pos: '0%' },
          { year: '2016', label: 'Developer', pos: '28%' },
          { year: '2020', label: 'Analyst Lead', pos: '57%' },
          { year: '2023', label: 'Project Manager I', pos: '78%' },
          { year: '2026', label: 'Project Manager II', pos: '100%' }
        ],
        publishedAt: new Date(),
      };

      if (!profile) {
        strapi.log.info('Seeding Profile...');
        await strapi.entityService.create('api::profile.profile', {
          data: profileData
        });
      } else {
        strapi.log.info('Updating Profile to match frontend...');
        await strapi.entityService.update('api::profile.profile', profile.id, {
          data: profileData
        });
      }

      // 2. Seed Experiences
      const experienceCount = await strapi.entityService.count('api::experience.experience');
      if (experienceCount === 0) {
        strapi.log.info('Seeding Experiences...');
        const experiences = [
          {
            role: "Vocational Trainer in Business & Project Management",
            timelineRole: "Vocational Trainer",
            company: "National Institute of Technology",
            startDate: "2024-04-01",
            endDate: null,
            dateRange: "April 2024 - Present",
            duration: "Current",
            description: "- Delivering Diploma of Project Management and facilitating Professional Year Programs.\n- Mentoring students on Agile methodologies and PMBOK standards.\n- Aligning curriculum with current industry requirements.",
            color: "bg-pmi-blue",
            type: "work",
            order: 1
          },
          {
            role: "ICT Project Manager",
            timelineRole: "Project Manager",
            company: "Leapfrog Technology",
            startDate: "2021-08-01",
            endDate: "2023-05-01",
            dateRange: "Aug 2021 - May 2023",
            duration: "1 yr 10 mos",
            description: "- Led mid-scale cloud migration projects for local SMEs.\n- Managed cross-functional teams of developers and QA engineers.\n- Standardized project documentation using Confluence and Jira.",
            color: "bg-pmi-green",
            type: "work",
            order: 2
          },
          {
            role: "Business Analyst",
            timelineRole: "Business Analyst",
            company: "Perth Digital ERP Systems",
            startDate: "2020-01-01",
            endDate: "2021-07-01",
            dateRange: "Jan 2020 - Jul 2021",
            duration: "1 yr 7 mos",
            description: "- Gathered requirements for ERP implementations via stakeholder workshops.\n- Developed detailed user stories and process flow diagrams.\n- Bridged communication between business units and technical teams.",
            color: "bg-pmi-purple",
            type: "work",
            order: 3
          },
          {
            role: "Software Developer (.NET)",
            timelineRole: "Software Developer",
            company: "Multiple Organizations",
            startDate: "2016-07-01",
            endDate: "2018-09-01",
            dateRange: "Jul 2016 - Sep 2018",
            duration: "2 yrs 3 mos",
            description: "- Developed custom software solutions using .NET frameworks.\n- Built expertise in full-stack development and enterprise architecture.\n- Collaborated with senior architects on system design.",
            color: "bg-slate-500",
            type: "work",
            order: 4
          },
          {
            role: "Student",
            timelineRole: "Student",
            company: "University / Self-Learning",
            startDate: "2012-01-01",
            endDate: "2016-01-01",
            dateRange: "2012 - 2016",
            duration: "4 yrs",
            description: "- Foundation in Computer Science and early project management exposure.\n- Completed capstone projects focused on software lifecycle management.\n- Active member of the university tech society.",
            color: "bg-slate-300",
            type: "education",
            order: 5
          }
        ];

        for (const exp of experiences) {
          await strapi.entityService.create('api::experience.experience', {
            data: { ...exp, publishedAt: new Date() }
          });
        }
      }

      // 3. Seed Services
      const serviceCount = await strapi.entityService.count('api::service.service');
      if (serviceCount === 0) {
        strapi.log.info('Seeding Services...');
        const services = [
          { title: "Agile Consulting", icon: "Target", color: "text-pmi-blue", bg: "bg-pmi-blue/10", order: 1 },
          { title: "Assistant Mentoring", icon: "Users", color: "text-pmi-cyan", bg: "bg-pmi-cyan/10", order: 2 },
          { title: "Team Coaching", icon: "Zap", color: "text-pmi-purple", bg: "bg-pmi-purple/10", order: 3 },
          { title: "Scrum Master", icon: "Briefcase", color: "text-pmi-green", bg: "bg-pmi-green/10", order: 4 },
          { title: "Stakeholder MGMT", icon: "Shield", color: "text-pmi-orange", bg: "bg-pmi-orange/10", order: 5 },
          { title: "Agile Engagement", icon: "TrendingUp", color: "text-pmi-blue", bg: "bg-pmi-blue/10", order: 6 }
        ];

        for (const s of services) {
          await strapi.entityService.create('api::service.service', {
            data: {
              ...s,
              description: "Comprehensive solutions tailored to your unique organizational culture and delivery goals.", // default desc
              publishedAt: new Date()
            }
          });
        }
      }

      // 4. Seed Social Links
      const socialCount = await strapi.entityService.count('api::social-link.social-link');
      if (socialCount === 0) {
        strapi.log.info('Seeding Social Links...');
        const socialLinks = [
          { platform: "Email", url: "mailto:meet.atutgorkhali@gmail.com", icon: "Mail", showInFooter: true, showInContact: true, order: 1 },
          { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", showInFooter: true, showInContact: true, order: 2 }
        ];

        for (const link of socialLinks) {
          await strapi.entityService.create('api::social-link.social-link', {
            data: { ...link, publishedAt: new Date() }
          });
        }
      }

      // 5. Seed Skills (Competencies)
      const skillCount = await strapi.entityService.count('api::skill.skill');
      if (skillCount === 0) {
        strapi.log.info('Seeding Skills...');
        const skillsData = [
          {
            title: "Management & Leadership",
            barColor: "bg-pmi-blue",
            skills: [
              { name: "Agile Leadership", desc: "Scrum Master ceremonies, team coaching, retrospectives", color: "bg-pmi-blue" },
              { name: "SAFe Scaling", desc: "PI Planning, RAID Management, cross-team dependencies", color: "bg-pmi-blue" },
              { name: "Product Ownership", desc: "Backlog prioritization, stakeholder management", color: "bg-pmi-blue" },
              { name: "Change Management", desc: "Org transformation, lean principles, continuous improvement, Release Management", color: "bg-pmi-blue" }
            ],
            order: 1
          },
          {
            title: "Engineering & Tools",
            barColor: "bg-pmi-navy",
            badge: "HANDS-ON",
            skills: [
              { name: "Technical Experience", desc: "Full-stack development", color: "bg-pmi-navy" },
              { name: "Enterprise Platforms", desc: "Jira, JiraAlign, Confluence", color: "bg-pmi-navy" },
              { name: "Languages Experience", desc: ".Net, Python, SQL", color: "bg-pmi-navy" },
              { name: "Domain Experience", desc: "Fintech, Healthcare, ERP, compliance systems", color: "bg-pmi-navy" }
            ],
            order: 2
          },
          {
            title: "Leadership & Communication",
            barColor: "bg-pmi-magenta",
            skills: [
              { name: "Executive Communication", desc: "Strategic presentations, stakeholder management", color: "bg-pink-500" },
              { name: "Team Development", desc: "Coaching, mentoring, conflict resolution", color: "bg-pink-500" },
              { name: "Cultural Leadership", desc: "Cross-cultural collaboration, psychological safety", color: "bg-pink-500" },
              { name: "Organizational Design", desc: "Team structure, process optimization, scaling", color: "bg-pink-500" }
            ],
            order: 3
          }
        ];

        for (const skill of skillsData) {
          await strapi.entityService.create('api::skill.skill', {
            data: { ...skill, publishedAt: new Date() }
          });
        }
      }

      // 6. Seed Education (Credentials)
      const educationCount = await strapi.entityService.count('api::education.education');
      if (educationCount === 0) {
        strapi.log.info('Seeding Education...');
        const educationData = [
          {
            title: "MCIS",
            name: "Nepal College Of Information Technology (NCIT)",
            institution: "Pokhara University, Nepal",
            year: "2021",
            description: "Specialized in software architecture, agile systems design, and technology leadership for enterprise-scale transformation.",
            order: 1
          },
          {
            title: "B.Computing",
            name: "The British College, Nepal",
            institution: "Leeds Beckett University, UK",
            year: "2017",
            description: "Focused on core software engineering, algorithms, and international business systems within a global curriculum.",
            order: 2
          }
        ];
        for (const edu of educationData) {
          await strapi.entityService.create('api::education.education', {
            data: { ...edu, publishedAt: new Date() }
          });
        }
      }

      // 7. Seed Certifications
      const certCount = await strapi.entityService.count('api::certification.certification');
      if (certCount === 0) {
        strapi.log.info('Seeding Certifications...');
        const certData = [
          { name: "SAFE® 6 CERTIFIED", role: "Product Owner / Product Manager", year: "2024", link: "https://scaledagile.com", order: 1 },
          { name: "SAFE® 6 CERTIFIED", role: "Advanced Scrum Master", year: "2023", link: "https://scaledagile.com", order: 2 },
          { name: "SAFE® 6 CERTIFIED", role: "Scrum Master", year: "2022", link: "https://scaledagile.com", order: 3 },
          { name: "SAFE® 6", role: "Certified Practitioner", year: "2021", link: "https://scaledagile.com", order: 4 }
        ];
        for (const cert of certData) {
          await strapi.entityService.create('api::certification.certification', {
            data: { ...cert, publishedAt: new Date() }
          });
        }
      }

    } catch (error) {
      strapi.log.error('Bootstrap Seeding Error:', error);
    }
  },
};
