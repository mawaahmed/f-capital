"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nom ||
      !formData.entreprise ||
      !formData.email ||
      !formData.telephone ||
      !formData.message
    ) {
      setFormError(t("contact.error_required"));
      setStatus("error");
      return;
    }

    setFormError(null);

    const response = await fetch("https://formspree.io/f/mkgjydrj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({
        nom: "",
        entreprise: "",
        email: "",
        telephone: "",
        message: "",
      });
    } else {
      setStatus("error");
    }

    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  return (
    <section
      className="flex flex-col items-center justify-center mb-12 rounded-lg w-full px-5 lg:px-20"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-24 w-full max-w-full">
        <div className="md:w-2/5">
          <h2 className="text-4xl md:text-left font-bold text-black dark:text-dark sm:text-[40px]/[40px]">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-[16px] text-body-color">
            {t("contact.description")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 space-y-6 w-full"
          method="POST"
          action="https://formspree.io/f/mkgjydrj"
        >
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact.nom")}{" "}
              <span className="text-[#FF5A19]">{t("contact.required")}</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="entreprise"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact.entreprise")}
            </label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact.email")}{" "}
              <span className="text-[#FF5A19]">{t("contact.required")}</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact.telephone")}
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block text-black resize-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Erreur de formulaire */}
          {formError && (
            <div className="text-red-500 text-sm mb-4">{formError}</div>
          )}

          {/* Message de statut */}
          {status && (
            <div
              className={`text-sm mb-4 ${
                status === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status === "success" ? t("contact.success") : t("contact.error")}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="text-white text-[16px] w-full mt-8 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out bg-[#FF5A19] hover:text-white hover:bg-[#ce6136]"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
