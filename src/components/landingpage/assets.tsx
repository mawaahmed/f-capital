import { Zap, Smartphone, PieChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const AtoutsSection = () => {
  const { t } = useTranslation();
  const atouts = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: t("contact.atouttitle1"),
      description: t("contact.description1"),
      color: "text-emerald-600 bg-emerald-50",
      highlight: t("contact.highlight1"),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("contact.atouttitle2"),
      description: t("contact.description2"),
      color: "text-blue-600 bg-blue-50",
      highlight: t("contact.highlight2"),
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("contact.atouttitle3"),
      description: t("contact.description3"),
      color: "text-purple-600 bg-purple-50",
      highlight: t("contact.highlight3"),
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
      id="atouts"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.atout")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.paragraph")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {atouts.map((atout, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className={`mb-6 inline-flex p-3 rounded-lg ${atout.color}`}>
                {atout.icon}
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-50 text-orange-600">
                  {atout.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {atout.title}
              </h3>
              <p className="text-gray-600 mb-6">{atout.description}</p>
              <div className="absolute -inset-1 -z-10 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtoutsSection;
