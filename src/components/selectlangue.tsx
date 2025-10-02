import { useDiistyContext } from '@/context/ApplicationContext';
import france from '@/assets/flags/france.png';
import uk from '@/assets/flags/uk.png';

function LanguageSwitch() {
  const { language, toggleLanguage } = useDiistyContext();

  return (
    <div 
      className="relative w-10 h-8 cursor-pointer group"
      onClick={() => toggleLanguage(language === "en" ? "fr" : "en")}
    >
      {/* Drapeau français */}
      <div
        className={`absolute inset-0 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${
          language === 'fr'
            ? 'z-20 scale-100 rotate-0'
            : 'z-10 scale-90 -rotate-12 translate-x-4'
        }`}
      >
        <div className="w-full h-full flex">
          <img src={france} alt="French Flag" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Drapeau anglais */}
      <div
        className={`absolute inset-0 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${
          language === 'en'
            ? 'z-20 scale-100 rotate-0'
            : 'z-10 scale-90 rotate-12 -translate-x-4'
        }`}
      >
        <div className="w-full h-full flex">
          <img src={uk} alt="UK Flag" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitch;
