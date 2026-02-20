import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import {
  profile,
  experiences,
  services,
  socialLinks,
  skills,
  educations,
  certifications
} from '@/data/mockData'

function App() {
  const initials = profile ? `${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}` : 'RT'

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={<Home
            profile={profile}
            initials={initials}
            experiences={experiences}
            services={services}
            socialLinks={socialLinks}
            skills={skills}
            educations={educations}
            certifications={certifications}
          />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
