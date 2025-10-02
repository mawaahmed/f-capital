"use client";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Cta = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:py-[40px] bg-white mt-20 lg:mt-10 md:mt-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg bg-[#FF5A19] py-12 px-8 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-10 ">
            <div className="w-full px-4 lg:w-1/2 ">
              <p className="block mb-4 text-base font-medium text-white">
                {t("cta.description")}
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[35px]/[43px] lg:mb-0">
                <span className="xs:block">{t("cta.title")}</span>
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-col lg:flex-row lg:justify-end items-center ">
                <ScrollLink
                  to={"contact"}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={
                    "flex items-center justify-center whitespace-nowrap py-3 px-4 w-full my-1 lg:my-0 lg:mr-4 text-base font-medium transition bg-[#000000] rounded-md text-white h-12 cursor-pointer"
                  }
                >
                  {t("cta.waitlist")}
                </ScrollLink>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=team@corextreme.tech&su=Demande%20de%20contact&body=Bonjour%2C%20je%20souhaite%20parler%20avec%20un%20commercial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[16px] mt-2 md:mt-0 lg:mt-0 text-center font-medium py-3 px-4 w-full rounded-lg whitespace-nowrap transition duration-150 ease-in-out border border-[#000000] hover:text-white"
                >
                  {t("cta.contact")}
                </a>
              </div>
            </div>
          </div>

          {/* Décoration SVG */}
        </div>
      </div>
    </section>
  );
};

export default Cta;
