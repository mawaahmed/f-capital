"use client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import logocomplete from "@/assets/logo/logo-complete.png";
import { Link } from "react-router";
import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import twitter from "@/assets/footer/twitter.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import { useTranslation } from "react-i18next";

interface Links {
  key: string;
  href: string;
}

interface SocialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLinks[] = [
  {
    imgSrc: facebook,
    link: "https://www.facebook.com/diistyapp",
    width: 10,
  },
  {
    imgSrc: instagram,
    link: "https://www.instagram.com/diistyapp/",
    width: 14,
  },
  {
    imgSrc: twitter,
    link: "https://x.com/diistyapp",
    width: 14,
  },
  {
    imgSrc: linkedin,
    link: " https://www.linkedin.com/company/diistyapp/about/?viewAsMember=true ",
    width: 14,
  },
];

const links: Links[] = [
  { key: "home", href: "/" },
  { key: "about", href: "#testimonials" },
  { key: "products", href: "#features" },
  // { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: "" });
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      setFormError(t("footer.newsletter.error_required"));
      setStatus("error");
    } else {
      setFormError(null);
      setStatus("success");
    }

    setFormError(null);

    const response = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus(t("footer.newsletter.success"));
      setFormData({ email: "" });
    } else {
      setStatus(t("footer.newsletter.error"));
    }

    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  return (
    <div className="bg-black" id="footer">
      <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-4 lg:max-w-7xl lg:px-8">
        <div className="my-12 flex grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          <div className="sm:col-span-6 lg:col-span-3 flex mr-auto">
            <img src={logocomplete} alt="logo" className="w-[200px] h-auto" />
          </div>

          <div className="hidden lg:flex sm:col-span-6 lg:col-span-5 items-center">
            <div className="flex gap-6">
              {links.map((item, i) => (
                <div key={i}>
                  <Link
                    to={item.href}
                    className="text-lg font-normal text-white flex items-center justify-center"
                  >
                    {t(`footer.links.${item.key}`)}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-6 lg:col-span-4 ml-4 flex justify-end gap-4 items-center">
            {socialLinks.map((item, i) => (
              <Link to={item.link} key={i}>
                <div className="socialBg h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-white">
                  <img
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={item.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-6 mt-8">
          <div className="flex flex-col items-center justify-center gap-2 sm:items-end">
            <h3 className="text-xl font-semibold text-white sm:mr-16 text-center sm:text-right">
              {t("footer.newsletter.title")}
            </h3>

            <form
              onSubmit={handleSubmit}
              method="POST"
              action=""
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-center sm:max-w-md sm:ml-auto"
            >
              <input
                type="email"
                name="email"
                placeholder={t("footer.newsletter.placeholder")}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-2 text-black bg-white rounded-lg focus:outline-none border border-gray-300 focus:border-[#FF5A19] focus:ring-1 focus:ring-[#FF5A19] sm:max-w-xs"
              />
              <button
                type="submit"
                className="bg-[#FF5A19] text-white px-5 py-2 w-full rounded-lg hover:bg-[#ce6136] hover:text-white"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>

            {formError && (
              <div className="text-red-500 text-sm mt-2">{formError}</div>
            )}
            {status && (
              <div
                className={`text-sm mt-2 ${
                  status === t("footer.newsletter.success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </div>

        <div className="pt-12 pb-10 flex flex-col-reverse md:flex-row items-center justify-between border-t border-t-white border-opacity-30 ">
          <h4 className="text-lg text-center md:text-start font-normal text-white opacity-60 mt-4">
            {t("footer.bottom.rights")}
          </h4>
          <div className="flex gap-5 mt-6 md:mt-0 justify-center text-center md:justify-start">
            <h4 className="opacity-60 text-lg font-normal text-white">
              <Link to="/" target="_blank">
                {t("footer.bottom.privacy")}
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-60 w-0.5"></div>
            <h4 className="opacity-60 text-lg font-normal text-white">
              <Link to="/" target="_blank">
                {t("footer.bottom.terms")}
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
