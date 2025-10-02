import { Outlet } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "@/translation/i18n"
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebarDistributor } from "../app-admin-sidebar";
import { SiteHeaderDistributor } from "../site-headeradmin";

export default function DashboardLayoutDistributor() {
  return (
    <I18nextProvider i18n={i18n}>
      <SidebarProvider>
        <AppSidebarDistributor />
        <SidebarInset>
          <SiteHeaderDistributor />
          <div className="pt-[65px]">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </I18nextProvider>
  );
}
