import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import heroImage from "@/assets/banner/hero-image.webp";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-header" id="home">
      <div className="max-w-7xl mx-auto pt-36 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-14 items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 ">
          {/* Texte */}
          <div className="lg:col-span-7 flex flex-col justify-evenly text-center lg:text-left">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold lh-133 pt-5 text-black">
              {t("landingpage.title")}
            </h1>
            <h3 className="text-[18px] sm:text-lg md:text-xl text-black opacity-75 font-normal pt-6">
              {t("landingpage.description")}
            </h3>
            <div className="pt-14">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=team@corextreme.tech&su=Demande%20de%20contact&body=Bonjour%2C%20je%20souhaite%20parler%20avec%20un%20commercial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-[20px] font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out bg-[#FF5A19] hover:bg-[#ce6136]"
              >
                {t("landingpage.cta")}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center pt-20 lg:pt-0">
            <LazyLoadImage
              src={heroImage}
              alt="Illustration Diisty"
              effect="blur"
              width={500}
              height={500}
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
