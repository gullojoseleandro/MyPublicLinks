import { useState, useEffect } from 'react';
import { Layout } from './layout';
import { LinkButton, ProfileContainer, UtilsButtonGroup } from './components';
import VideoBackground from './components/background/VideoBackground';
import { translations, links } from './data';
import Video from '@videos/video_codigo_blanco.mp4';
import MyImage from '@images/yo.jpeg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleVideoLoaded = () => setLoading(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const t = translations[language];

  return (
    <>
      {loading && <LoadingSpinner />}
      <Layout isDarkMode={isDarkMode}>
        <VideoBackground video={Video} isDarkMode={isDarkMode} onReady={handleVideoLoaded} />
        <MainContent
          t={t}
          isDarkMode={isDarkMode}
          loading={loading}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
        />
      </Layout>
    </>
  );
}

const LoadingSpinner = () => (
  <div className="fixed left-0 right-0 flex items-center justify-center min-h-screen bg-black">
    <div className="text-center">
      <div className="spinner-border animate-spin inline-block w-20 h-20 border-b-4 border-blue-500 rounded-full" role="status"></div>
    </div>
  </div>
);

interface MainContentProps {
  t: typeof translations['es']; 
  isDarkMode: boolean;
  loading: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const MainContent = ({ t, isDarkMode, loading, toggleTheme, toggleLanguage }: MainContentProps) => (
  <div className="min-h-screen flex items-center justify-center p-4 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-50">
    <div className="max-w-md w-full space-y-8">
      <ProfileContainer t={t} MyImage={MyImage} />
      <LinkButton t={t} links={links} />
      <UtilsButtonGroup isDarkMode={isDarkMode} toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} t={t} />
      {!loading && (
        <p style={{ userSelect: 'none' }} className="fixed bottom-0 right-0 pe-4 text-xs text-gray-600 dark:text-gray-300">
          {t.footer}
        </p>
      )}
    </div>
  </div>
);

export default App;