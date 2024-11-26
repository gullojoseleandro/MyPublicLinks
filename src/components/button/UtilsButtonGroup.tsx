// Icons
import { IoLanguage } from 'react-icons/io5'
import { FaMoon, FaSun } from 'react-icons/fa'

interface UtilsButtonGroupProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    toggleLanguage: () => void;
    t: {
        lightMode: string;
        darkMode: string;
        changeLanguage: string;
    }
}

export const UtilsButtonGroup = ({ isDarkMode, toggleTheme, toggleLanguage, t }: UtilsButtonGroupProps) => {
    const { lightMode, darkMode, changeLanguage } = t
    return (
        <>
            <div className="flex justify-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label={isDarkMode ? lightMode : darkMode}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label={changeLanguage}
            >
              <IoLanguage />
            </button>
          </div>
        </>
    )
}