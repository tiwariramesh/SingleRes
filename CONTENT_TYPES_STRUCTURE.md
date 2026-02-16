# Content Types Structure - Based on atutgorkhali.com.np Analysis

## Overview
This structure is based on the actual website analysis from atutgorkhali.com.np, adapted for Strapi CMS with React frontend.

---

## Content Types to Create

### 1. Profile (Single Type) 👤
**Purpose**: Main profile information (only one instance)

**Fields**:
- `firstName` (Text, Required)
- `lastName` (Text, Required)
- `initials` (Text) - e.g., "AG" for logo
- `title` (Text, Required) - e.g., "Agile Project Manager"
- `subtitle` (Text) - Animated gradient text - e.g., "Adaptive Teams. Reliable Delivery."
- `bio` (Rich Text) - Professional description
- `email` (Email, Required)
- `phone` (Text)
- `location` (Text) - e.g., "Kathmandu, Nepal"
- `profilePhoto` (Media - Single Image)
- `resumePDF` (Media - Single File) - Visual CV
- `resumeText` (Media - Single File) - ATS version
- `resumePDFSize` (Text) - e.g., "250 KB"
- `resumeTextSize` (Text) - e.g., "45 KB"
- `resumeLastUpdated` (Date)
- `yearsOfExperience` (Number)
- `tagline` (Text) - Footer tagline

**Sample Data**:
```json
{
  "firstName": "Ramesh",
  "lastName": "Tiwari",
  "initials": "RT",
  "title": "Full Stack Developer",
  "subtitle": "Building Scalable Solutions.",
  "bio": "Experienced developer specializing in modern web technologies...",
  "email": "ramestiwarii@gmail.com",
  "phone": "+977-XXXXXXXXX",
  "location": "Kathmandu, Nepal",
  "yearsOfExperience": 5,
  "tagline": "Transforming ideas into digital reality through innovative web solutions"
}
```

---

### 2. Skills (Collection Type) 💡
**Purpose**: Skills organized by categories

**Fields**:
- `name` (Text, Required) - e.g., "Agile Leadership"
- `category` (Text, Required) - e.g., "Management & Leadership"
- `description` (Text) - Brief description
- `subSkills` (JSON) - Array of sub-skills with descriptions
- `icon` (Text) - Lucide icon name
- `accentColor` (Enumeration) - Options: "indigo", "blue", "purple", "emerald"
- `order` (Number)

**Sample Data**:
```json
{
  "name": "React Development",
  "category": "Technical Skills",
  "description": "Modern frontend development",
  "subSkills": [
    {"name": "React Hooks", "detail": "Advanced state management"},
    {"name": "Next.js", "detail": "Server-side rendering"},
    {"name": "TypeScript", "detail": "Type-safe development"}
  ],
  "icon": "code",
  "accentColor": "indigo",
  "order": 1
}
```

---

### 3. Experience (Collection Type) 💼
**Purpose**: Career timeline

**Fields**:
- `position` (Text, Required)
- `company` (Text, Required)
- `startDate` (Date, Required)
- `endDate` (Date) - null if current
- `current` (Boolean)
- `duration` (Text) - e.g., "4+ years"
- `description` (Rich Text)
- `companyLogo` (Media - Single Image)
- `location` (Text)
- `statusColor` (Enumeration) - Options: "emerald" (current), "blue", "slate" (past)
- `order` (Number) - Most recent first

**Sample Data**:
```json
{
  "position": "Senior Full Stack Developer",
  "company": "Tech Solutions Pvt. Ltd.",
  "startDate": "2021-12-01",
  "endDate": null,
  "current": true,
  "duration": "3+ years",
  "description": "Leading development of enterprise web applications...",
  "location": "Kathmandu, Nepal",
  "statusColor": "emerald",
  "order": 1
}
```

---

### 4. Projects (Collection Type) 🚀
**Purpose**: Portfolio showcase

**Fields**:
- `title` (Text, Required)
- `description` (Rich Text)
- `shortDescription` (Text) - For card view
- `thumbnail` (Media - Single Image)
- `images` (Media - Multiple Images)
- `category` (Enumeration) - Options: "Web App", "Mobile App", "API", "E-commerce", "Other"
- `techStack` (JSON) - Array of technologies
- `liveUrl` (Text - URL)
- `githubUrl` (Text - URL)
- `caseStudyUrl` (Text - URL)
- `featured` (Boolean)
- `order` (Number)
- `completedDate` (Date)

**Sample Data**:
```json
{
  "title": "E-commerce Platform",
  "shortDescription": "Full-featured online shopping solution",
  "description": "Built a complete e-commerce platform with payment integration...",
  "category": "Web App",
  "techStack": ["React", "Node.js", "Strapi", "PostgreSQL", "Stripe"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/user/project",
  "featured": true,
  "order": 1
}
```

---

### 5. Education (Collection Type) 🎓
**Purpose**: Academic credentials

**Fields**:
- `degreeType` (Enumeration) - Options: "Postgraduate", "Undergraduate", "Certification"
- `degree` (Text, Required) - e.g., "Bachelor of Science"
- `field` (Text) - e.g., "Computer Science"
- `institution` (Text, Required)
- `startDate` (Date)
- `endDate` (Date)
- `current` (Boolean)
- `gpa` (Text) - e.g., "3.88 GPA" or "First Class Honours"
- `description` (Rich Text)
- `logo` (Media - Single Image)
- `location` (Text)
- `order` (Number)

**Sample Data**:
```json
{
  "degreeType": "Undergraduate",
  "degree": "Bachelor of Science",
  "field": "Computer Science",
  "institution": "Tribhuvan University",
  "startDate": "2015-09-01",
  "endDate": "2019-06-01",
  "gpa": "First Class Honours",
  "description": "Relevant coursework: Data Structures, Algorithms, Web Development...",
  "location": "Kathmandu, Nepal",
  "order": 1
}
```

---

### 6. Certifications (Collection Type) 🏆
**Purpose**: Professional certifications (separate from education)

**Fields**:
- `name` (Text, Required) - e.g., "SAFe® 6 Certified Scrum Master"
- `issuingOrganization` (Text)
- `issueDate` (Date)
- `expiryDate` (Date) - Optional
- `credentialId` (Text)
- `credentialUrl` (Text - URL)
- `badge` (Media - Single Image)
- `order` (Number)

**Sample Data**:
```json
{
  "name": "AWS Certified Solutions Architect",
  "issuingOrganization": "Amazon Web Services",
  "issueDate": "2023-06-01",
  "expiryDate": "2026-06-01",
  "credentialId": "ABC123XYZ",
  "order": 1
}
```

---

### 7. Services (Collection Type) 🛠️
**Purpose**: Services offered

**Fields**:
- `title` (Text, Required)
- `category` (Text) - e.g., "STRATEGY", "DELIVERY", "CONSULT"
- `subtitle` (Text) - e.g., "Strategy", "Growth"
- `description` (Rich Text)
- `icon` (Text) - Lucide icon name
- `order` (Number)

**Sample Data**:
```json
{
  "title": "Web Development",
  "category": "DELIVERY",
  "subtitle": "Development",
  "description": "Custom web applications using modern frameworks and best practices",
  "icon": "globe",
  "order": 1
}
```

---

### 8. Social Proof / Statistics (Collection Type) 📊
**Purpose**: Trust indicators and achievements

**Fields**:
- `number` (Text, Required) - e.g., "150+", "10+", "~10"
- `label` (Text, Required) - e.g., "Students & Engineers Coached"
- `description` (Text) - Optional additional context
- `order` (Number)

**Sample Data**:
```json
{
  "number": "50+",
  "label": "Projects Delivered",
  "description": "Successfully completed projects across various industries",
  "order": 1
}
```

---

### 9. Industries / Domains (Collection Type) 🏢
**Purpose**: Industry experience tags

**Fields**:
- `name` (Text, Required) - e.g., "Health-Tech", "Edu-Tech"
- `order` (Number)

**Sample Data**:
```json
{
  "name": "Fin-Tech",
  "order": 1
}
```

---

### 10. Social Links (Collection Type) 🔗
**Purpose**: Social media and professional profiles

**Fields**:
- `platform` (Text, Required) - e.g., "LinkedIn", "GitHub"
- `url` (Text - URL, Required)
- `icon` (Text) - Lucide icon name
- `showInHeader` (Boolean)
- `showInFooter` (Boolean)
- `showInContact` (Boolean)
- `order` (Number)

**Sample Data**:
```json
{
  "platform": "GitHub",
  "url": "https://github.com/tiwariramesh",
  "icon": "github",
  "showInHeader": true,
  "showInFooter": true,
  "showInContact": true,
  "order": 1
}
```

---

### 11. Expertise Tags (Collection Type) ✅
**Purpose**: Quick expertise highlights (shown in hero)

**Fields**:
- `name` (Text, Required) - e.g., "SAFe", "Scrum", "Kanban"
- `icon` (Text) - Lucide icon name (default: "check-circle-2")
- `order` (Number)

**Sample Data**:
```json
{
  "name": "React",
  "icon": "check-circle-2",
  "order": 1
}
```

---

### 12. Contact Messages (Collection Type) 📧
**Purpose**: Form submissions (if contact form added)

**Fields**:
- `name` (Text, Required)
- `email` (Email, Required)
- `subject` (Text)
- `message` (Rich Text, Required)
- `read` (Boolean, Default: false)
- `replied` (Boolean, Default: false)
- `createdAt` (Auto-generated)

---

## API Permissions Setup

### Public (Unauthenticated)
- **Find & FindOne**: All content types EXCEPT Contact Messages
- **Create**: Contact Messages only (for form submissions)

### Authenticated (Admin)
- **Full CRUD**: All content types

---

## Summary

**Total Content Types**: 12
1. Profile (Single Type)
2. Skills (Collection)
3. Experience (Collection)
4. Projects (Collection)
5. Education (Collection)
6. Certifications (Collection)
7. Services (Collection)
8. Social Proof/Statistics (Collection)
9. Industries/Domains (Collection)
10. Social Links (Collection)
11. Expertise Tags (Collection)
12. Contact Messages (Collection)

---

## Next Steps

1. ✅ Review this structure
2. ✅ Confirm it matches your needs
3. 🚀 Create content types in Strapi
4. 📝 Add sample data
5. 🔧 Configure API permissions
6. 🎨 Build React frontend components

**Ready to proceed with creating these content types in Strapi?**
