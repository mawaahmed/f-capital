import DashboardWrapper from "@/components/layouts/dashboard-wrapper";
import { useDiistyContext } from "@/context/ApplicationContext";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const DashboardMain = () => {
  const { t } = useTranslation();
  const { user } = useDiistyContext();


  return (
    <div className="gap-8 pt-10 text-center sm:text-start">
      <DashboardWrapper
        title={t("dashboard.title", {
          name: capitalizeFirstLetter(user?.profile?.firstName ?? ""),
        })}
        description={t("dashboard.description")}
      >
        <div></div>
      </DashboardWrapper>
    </div>
  );
};

export default DashboardMain;
