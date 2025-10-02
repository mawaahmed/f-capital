"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import distrid1 from "@/assets/business/Distrib1.png";
import distrid2 from "@/assets/business/1.png";
// import distrid3 from "@/assets/business/Distrib3.png";
import svg1 from "@/assets/features/time.svg";
import svg2 from "@/assets/features/signal.svg";
import svg3 from "@/assets/features/dollar.svg";

const Features = () => {
  const { t } = useTranslation();
  const [selectedCategory] = useState("efficiency");

  const Aboutdata = [
    {
      imgSrc: svg1,
      heading: t("features.cards.0.title"),
      paragraph: t("features.cards.0.description"),
      category: "efficiency",
    },
    {
      imgSrc: svg2,
      heading: t("features.cards.1.title"),
      paragraph: t("features.cards.1.description"),
      category: "efficiency",
    },
    {
      imgSrc: svg3,
      heading: t("features.cards.2.title"),
      paragraph: t("features.cards.2.description"),
      category: "efficiency",
    },
  ];

  const Aboutdata2 = [
    {
      title1: t("features.blocks.0.title"),
      description1: t("features.blocks.0.description"),
      image1: distrid1,
      title2: t("features.blocks.1.title"),
      description2: t("features.blocks.1.description"),
      image2: distrid2,
      // title3: t("features.blocks.2.title"),
      // description3: t("features.blocks.2.description"),
      // image3: distrid3,
      category: "efficiency",
    },
  ];

  const filteredData = Aboutdata.filter(
    (item) => item.category === selectedCategory
  );
  const filteredData2 = Aboutdata2.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-babyblue" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-0">
        <h3 className="text-3xl sm:text-5xl font-semibold text-black text-center my-4">
          {t("features.sectionTitle")}
        </h3>
        <h5 className="text-black opacity-60 text-base sm:text-lg font-normal text-center">
          {t("features.sectionDescription")}
        </h5>

        <div className="flex flex-col items-center justify-center lg:items-start mt-10">
          {/* Cartes icônes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 w-full">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 featureShadow w-full"
              >
                <LazyLoadImage
                  src={item.imgSrc}
                  alt="icon"
                  effect="blur"
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-black mt-5">
                  {item.heading}
                </h3>
                <p className="text-base text-black opacity-60 mt-2">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Blocs image + texte */}
          <div className="w-full pt-20">
            {filteredData2.map((item, i) => (
              <div key={i} className="space-y-20">
                {/* Bloc 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-1 lg:order-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-4xl font-semibold">
                      {item.title1}
                    </h2>
                    <p className="text-base sm:text-lg opacity-75 mt-4">
                      {item.description1}
                    </p>
                  </div>
                  <div className="lg:col-span-6 order-2 lg:order-2">
                    <LazyLoadImage
                      src={item.image1}
                      alt="Distributeurs"
                      effect="blur"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>

                {/* Bloc 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-4xl font-semibold">
                      {item.title2}
                    </h2>
                    <p className="text-base sm:text-lg opacity-75 mt-4">
                      {item.description2}
                    </p>
                  </div>
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <LazyLoadImage
                      src={item.image2}
                      alt="Producteurs"
                      effect="blur"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
