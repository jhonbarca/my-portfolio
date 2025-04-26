import { useLanguage } from "../context/LanguageContext";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const { lang, setLang } = useLanguage();

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Mi Portfolio</h1>

      <div className="flex items-center gap-4">
        <button onClick={toggleLang} className="text-sm">
          {lang === "es" ? "EN" : "ES"}
        </button>

        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
