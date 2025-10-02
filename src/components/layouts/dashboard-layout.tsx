import { Outlet } from "react-router";
import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { SiteHeader } from "../site-header";
import { I18nextProvider } from "react-i18next";
import i18n from "@/translation/i18n"

export default function DashboardLayout() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <div className="pt-20">
          <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      </I18nextProvider>
    </div>
  );
}
