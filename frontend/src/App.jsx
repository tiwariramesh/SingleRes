import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { Skeleton } from "@/components/ui/skeleton"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home profile={profile} initials={initials} />}
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

