# Backend Content Type Updates

To support the new flexible frontend design, I will update the Strapi Content Types.

## 1. Profile (Single Type)
- **Add** `heroBadges` (JSON): For dynamic badges (PMP, Trainer).
- **Add** `heroStats` (JSON): For dynamic stats (10+ Years, etc.).
- **Add** `socialLinks` (JSON): For footer links.
- **Add** `timelineSteps` (JSON): For the Career Journey horizontal timeline.

## 2. Experience (Collection)
- **Update** `statusColor`: Change from Enum to String (any Tailwind class).
- **Add** `type`: Enum (`work`, `education`) to distinct job vs study entries.
- **Add** `timelineLabel`: String (for the timeline step association if needed).

## 3. Education (Collection) -> "Degree"
- **Rename/Map**: `degree` -> `title` (e.g., MCIS), `field` -> `name` (e.g., College Name).
- **Add** `year`: String (e.g., "2021") for simple display.
- **Remove** `gpa` (as requested cleanup).

## 4. Certification (Collection)
- **Add** `role`: String (e.g., "Product Owner").
- **Add** `year`: String (e.g., "2024").

## 5. Service (Collection)
- **Add** `color`: String (e.g., "text-pmi-blue").
- **Add** `bgColor`: String (e.g., "bg-pmi-blue/10").

## 6. Skill (Collection) -> "Competency Group"
- **Update** `accentColor`: Change from Enum to String.
- **Add** `badge`: String (e.g., "HANDS-ON").

## Execution
I will rewrite the `schema.json` files for each content type.
User needs to restart backend (`npm run develop`) after these changes to see them in Strapi Admin.
