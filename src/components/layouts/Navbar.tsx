import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
// import LanguageSelector from "../selectlangue";
// import logocomplete from "@/assets/logo/logo-complete.png";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  key?: string;
  name: string;
  href?: string;
  current: boolean;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  // { key: "home", name: "Accueil", href: "#home", current: true },
  // { key: "products", name: "Nos Produits", href: "#features", current: true },
  // { key: "about", name: "Nos Atouts", href: "#atouts", current: true },
  // { key: "contact", name: "Contact", href: "#contact", current: false },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 z-40">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky left-0 right-0 border-b bg-white duration-300 "
            : ""
        } max-w-[1532px] mx-auto `}
      >
        {/* Logo + nav */}
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          {/* <div className="flex flex-shrink-0 items-center border-right mr-24">
            <img src={logocomplete} alt="logo" width={150} height={66} />
          </div> */}
          F-CAPITAL

          {/* Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href?.replace("#", "") || ""}
                smooth={true}
                duration={500}
                offset={-80}
                className={`${
                  item.current
                    ? "text-brandPrimary"
                    : "text-black hover:text-brandPrimary"
                } cursor-pointer`}
              >
                {t(`navbar.${item.key}`)}
              </ScrollLink>
            ))}
          </div>

          {/* Buttons (desktop) */}
          <div className="space-x-4 hidden lg:flex items-center">
            <Link
              to="/login"
              className="hidden text-white lg:flex items-center bg-[#00AAFF] py-2 px-4 transition-all duration-300 rounded hover:bg-[#00AAFF]/90"
            >
              {t("login.btnlogin")}
            </Link>
            <Link
              to="/signup"
              className="cursor-pointer text-[#00AAFF]"
            >
              S'inscrire
            </Link>
            {/* <ScrollLink
              to={"contact"}
              smooth={true}
              duration={500}
              offset={-80}
              className={"cursor-pointer text-[#084880]"}
            >
              {t("login.btnsignup")}
            </ScrollLink> */}
          </div>

          {/* <LanguageSelector /> */}

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu avec animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 flex flex-col space-y-4 bg-white shadow-lg rounded-lg p-4 overflow-hidden"
            >
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href?.replace("#", "") || ""}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black hover:text-brandPrimary cursor-pointer"
                >
                  {t(`navbar.${item.key}`)}
                </ScrollLink>
              ))}
              <Link
                to="login"
                onClick={() => setIsMenuOpen(false)}
                className="text-white bg-[#084880] py-2 px-4 rounded hover:bg-[#063961] text-center"
              >
                {t("login.btnlogin")}
              </Link>
              <ScrollLink
                to={"contact"}
                smooth={true}
                duration={500}
                offset={-80}
                className={
                  "cursor-pointer text-[#084880] py-2 px-4 text-center"
                }
              >
                {t("login.btnsignup")}
              </ScrollLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
