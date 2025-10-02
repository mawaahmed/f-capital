import { TOKEN_STORAGE_KEY } from "@/lib/constants";
import type { ProfileResponse } from "@/types/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

interface DisstyProviderProps {
  children: ReactNode;
}
interface DiistyContextType {
  user: ProfileResponse | undefined;
  setUser: (userData: ProfileResponse) => void;
  theme: string;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: (lang?: string) => void;
  logout: () => void;
}

const DiistyContext = createContext<DiistyContextType | undefined>(undefined);

export const DiistyProvider: React.FC<DisstyProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<ProfileResponse | undefined>(undefined);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<string>("fr");
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = (lang?: string) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setUser(undefined);
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const contextValue: DiistyContextType = {
    user,
    setUser,
    theme,
    toggleTheme,
    language,
    toggleLanguage,
    logout,
  };

  return (
    <DiistyContext.Provider value={contextValue}>
      {children}
    </DiistyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDiistyContext = (): DiistyContextType => {
  const context = useContext(DiistyContext);
  if (!context) {
    throw new Error("useDiistyContext must be used within a DiistyProvider");
  }
  return context;
};
