"use client";

import DashboardWrapper from "@/components/layouts/distributor-dashboard-wraper";
// import { StatDistributor } from "@/components/statdistributor";
// import RecentPurchases from "@/components/table-distributor";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProfileResponse } from "@/types/auth";
import DashboardStats from "@/components/card-dashboard";
import ExchangeTrendsCard from "@/components/exchange-trends-card";
import TableInvoices from "@/components/table-invoices";

const DashboardMainDistributor = () => {
  const { t } = useTranslation();
  const [userProfile] = useState<ProfileResponse | null>({
    profile: { firstName: "John" },
  } as ProfileResponse);

  return (
    <div className="gap-2 text-center sm:text-start bg-gray-100">
      <DashboardWrapper
        title={t("distrib.title", {
          name: capitalizeFirstLetter(userProfile?.profile?.firstName ?? ""),
        })}
        description="Stay on top of claims, parts inventory, and performance analytics."
      >
        <div className="pt-5">
          <DashboardStats />
        </div>
        <div className="pt-5 mb-5">
          <ExchangeTrendsCard />
        </div>
        <div className="pt-5">
        <TableInvoices />
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default DashboardMainDistributor;
