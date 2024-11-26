// React
import { useState, useEffect } from 'react'
// Layout
import { Layout } from './layout'
// Components
import { LinkButton, ProfileContainer, UtilsButtonGroup } from './components'
// const VideoBackground = lazy(() => import('./components/background/VideoBackground'));
import VideoBackground from './components/background/VideoBackground'
// Data
import { translations, links } from './data'
// Assets
import Video from '@videos/video_codigo_blanco.mp4'
import MyImage from '@images/yo.jpeg'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };

  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  const t = translations[language]

  return (
    <>
      {loading && <div className="fixed left-0 right-0 flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-20 h-20 border-b-4 border-blue-500 rounded-full" role="status">
          </div>
        </div>
      </div>}

      <Layout isDarkMode={isDarkMode}>
        <VideoBackground video={Video} isDarkMode={isDarkMode} />
        <div className="min-h-screen flex items-center justify-center p-4 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-50">
          <div className="max-w-md w-full space-y-8">
            <ProfileContainer t={t} MyImage={MyImage} />
            <LinkButton t={t} links={links} />
            <UtilsButtonGroup isDarkMode={isDarkMode} toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} t={t} />
            {!loading && <p style={{ userSelect: 'none' }} className={"fixed bottom-0 right-0 pe-4 text-xs text-gray-600 dark:text-gray-300"}>{t.footer}</p>}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App