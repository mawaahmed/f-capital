import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
// import LanguageSwitch from "./selectlangue";

export function SiteHeaderDistributor() {
  const { state } = useSidebar();

  return (
    <header
      className={`fixed top-0 z-50 bg-background border-b transition-[width,height] ease-linear 
        ${
          state === "expanded" ? "w-[calc(100%-16rem)]" : "w-[calc(100%-2rem)]"
        } left-0 right-0 w-full sm:w-auto`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 h-[65px] bg-white border-b-2 w-full">
        {/* Sidebar Trigger à gauche */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4 mx-2" />
        </div>

        {/* Notifications + Avatar à droite */}
        <div className="flex items-center gap-4">
          {/* <LanguageSwitch /> */}
          <Link to="/notificationsdistrib">
            <Button
              variant="ghost"
              size="icon"
              className="relative cursor-pointer"
            >
              <Bell className="w-5 h-5" />
              <span className="text-green-700 font-semibold text-sm absolute -top-1 right-1">
                0
              </span>
            </Button>
          </Link>
          <Link to="/dashboard/accountsetting">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
