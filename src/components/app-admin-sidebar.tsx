"use client";

import {
  ClipboardListIcon,
  DatabaseIcon,
  FileIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  CreditCard,
  Wrench,
  TrendingUp,
  House,
  DollarSign,
} from "lucide-react";

// import minilogo from "@/assets/logo/logo-complete.png";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTranslation } from "react-i18next";
import { NavAdmin } from "./nav-admin";
import { NavUser } from "@/components/nav-user";

export function AppSidebarDistributor({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/",
        icon: LayoutDashboardIcon,
      },
      {
        title: "Exchanges Rates",
        url: "",
        icon: DollarSign,
        isActive: true,
        items: [
          {
            title: "Devise",
            url: "devise",
          },
          {
            title: "Sales",
            url: "sales",
          },
        ],
        
      },
      {
        title: "Client Management",
        url: "/dashboard/client-management",
        icon: Wrench,
        isActive: true,
      },
      {
        title: "Inventory",
        url: "/dashboard/inventory",
        icon: CreditCard,
        isActive: true,
      },
      {
        title: "Invoices",
        url: "/dashboard/invoices",
        icon: House,
        isActive: true,
      },
      {
        title: "Suppliers",
        url: "/dashboard/suppliers",
        icon: CreditCard,
        isActive: true,
      },
      {
        title: "Swift",
        url: "/dashboard/swift",
        icon: CreditCard,
        isActive: true,
      },
      {
        title: "Reports & Analytics",
        url: "",
        icon: TrendingUp,
        isActive: true,
        items: [
          {
            title: "Rapport Parts",
            url: "rapport-parts",
          },
          {
            title: "Sales",
            url: "sales",
          },
        ],
        
      },
    
    ],
    navSecondary: [
      {
        title: "Account Settings",
        url: "",
        icon: SettingsIcon,
      },
    ],
    documents: [
      {
        name: t("sidebar.documents.dataLibrary"),
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: t("sidebar.documents.reports"),
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: t("sidebar.documents.wordAssistant"),
        url: "#",
        icon: FileIcon,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-6">
            <span className="text-base font-semibold">
              {/* <img
                src={minilogo}
                alt={t("sidebar.companyLogoAlt")}
                className="object-contain w-10/12 ml-auto mr-auto"
              /> */}
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavAdmin items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto text-black hover:text-white" />
      </SidebarContent>

      <SidebarFooter>
        {/* Ici tu peux mettre NavUser quand tu auras les données */}
        <NavUser  />
      </SidebarFooter>
    </Sidebar>
  );
}
