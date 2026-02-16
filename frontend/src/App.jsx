import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { Skeleton } from "@/components/ui/skeleton"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResumeSection from './components/ResumeSection'
import Competencies from './components/Competencies'
import CareerJourney from './components/CareerJourney'
import Credentials from './components/Credentials'
import Services from './components/Services'
import { LogoCloud, Footer } from './components/Footer'

function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const profileData = await api.getProfile()
        setProfile(profileData.data)
        setLoading(false)
        console.log("✅ Data connected from Strapi:", profileData.data)
      } catch (error) {
        console.error("❌ Link to Strapi failed:", error)
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-6xl mx-auto space-y-12 pt-20">
          <Skeleton className="h-16 w-[300px]" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-40 w-full" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <Skeleton className="h-[500px] w-full rounded-[3rem]" />
          </div>
        </div>
      </div>
    )
  }

  const initials = profile ? `${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}` : 'RT'

  return (
    <div className="min-h-screen bg-white font-sans text-pmi-navy selection:bg-pmi-blue selection:text-white">
      <Navbar
        initials={initials}
        firstName={profile?.firstName}
        lastName={profile?.lastName}
      />

      <main>
        <Hero
          title={profile?.title}
          bio={profile?.bio}
          profileImage={profile?.profilePhoto?.url ? `${import.meta.env.VITE_STRAPI_URL}${profile.profilePhoto.url}` : null}
        />

        <ResumeSection />

        <Competencies />

        <CareerJourney />

        <Credentials />

        <Services />

        <LogoCloud />
      </main>

      <Footer
        firstName={profile?.firstName}
        lastName={profile?.lastName}
      />
    </div>
  )
}

export default App

