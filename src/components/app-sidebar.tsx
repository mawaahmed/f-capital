"use client";

import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  ListIcon,
  SettingsIcon,
} from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDiistyContext } from "@/context/ApplicationContext";
import { useGetProfile } from "@/hooks/use-auth";
import { TOKEN_STORAGE_KEY } from "@/lib/constants";
import type { ProfileResponse } from "@/types/auth";
import { jwtDecode, type JwtPayload } from "jwt-decode";
import defaultLogo from "@/assets/logo/mini-logo.png";

interface CustomJwtPayload extends JwtPayload {
  email: string;
  userId?: string;
  roles?: string[];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();
  const { setUser } = useDiistyContext();
  const [userData, setUserData] = React.useState<ProfileResponse | null>(null);
  const { mutate: getProfileMutation } = useGetProfile(
    (response) => {
      setUser(response);
      setUserData(response);
    },
    (error) => console.log({ error })
  );

  const data = {
    navMain: [
      {
        title: t("dashboard.Dashboard"),
        url: "/retailer/dashboard",
        icon: LayoutDashboardIcon,
      },
      {
        title: t("dashboard.Product Catalog"),
        url: "/retailer/dashboard/productcatalog",
        icon: ListIcon,
      },
      {
        title: t("dashboard.Order Tracking"),
        url: "/retailer/dashboard/ordertracking",
        icon: BarChartIcon,
      },
      // {
      //   title: t("dashboard.Billing"),
      //   url: "/retailer/dashboard/billing",
      //   icon: FolderIcon,
      // },
    ],
    navClouds: [
      {
        title: t("dashboard.Capture"),
        icon: CameraIcon,
        isActive: true,
        url: "#",
        items: [
          { title: t("dashboard.Active Proposals"), url: "#" },
          { title: t("dashboard.Archived"), url: "#" },
        ],
      },
      {
        title: t("dashboard.Proposal"),
        icon: FileTextIcon,
        url: "#",
        items: [
          { title: t("dashboard.Active Proposals"), url: "#" },
          { title: t("dashboard.Archived"), url: "#" },
        ],
      },
      {
        title: t("dashboard.Prompts"),
        icon: FileCodeIcon,
        url: "#",
        items: [
          { title: t("dashboard.Active Proposals"), url: "#" },
          { title: t("dashboard.Archived"), url: "#" },
        ],
      },
    ],
    navSecondary: [
      {
        title: t("dashboard.Settings"),
        url: "/retailer/dashboard/accountsetting",
        icon: SettingsIcon,
      },
      // {
      //   title: t("dashboard.Get Help"),
      //   url: "#",
      //   icon: HelpCircleIcon,
      // },
      // {
      //   title: t("dashboard.Search"),
      //   url: "/",
      //   icon: SearchIcon,
      // },
    ],
    documents: [
      {
        name: t("dashboard.Data Library"),
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: t("dashboard.Reports"),
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: t("dashboard.Word Assistant"),
        url: "#",
        icon: FileIcon,
      },
    ],
  };

  React.useEffect(() => {
    const decodedToken: CustomJwtPayload = jwtDecode(
      localStorage.getItem(TOKEN_STORAGE_KEY) ?? ""
    );
    getProfileMutation({ email: decodedToken.email ?? "" });
  }, [getProfileMutation]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <span className="text-base font-semibold flex justify-center">
              <img
                src={defaultLogo}
                alt={userData?.company.name}
                className="object-contain w-20 aspect-[0.86]"
              />
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/* {userData !== null && <NavUser user={userData} />} */}
      </SidebarFooter>
    </Sidebar>
  );
}
