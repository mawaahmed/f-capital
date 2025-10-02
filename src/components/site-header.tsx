import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
// import LanguageSwitch from "./selectlangue";

export function SiteHeader() {
  const { state } = useSidebar();

  return (
    <header
      className={`fixed top-0 z-50 bg-background  transition-[width,height] ease-linear
        w-full lg:${state === "expanded" ? "w-[calc(100%-16rem)]" : "w-[calc(100%-16rem)]"}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 h-[65px] bg-white w-full">
        {/* Sidebar Trigger à gauche */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4 mx-2" />
        </div>

        {/* Notifications + Avatar à droite */}
        <div className="flex items-center gap-4">
          {/* <LanguageSwitch /> */}
          <Link to="/notifications">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="text-green-700 font-semibold text-sm absolute -top-1 -right-1">
                0
              </span>
            </Button>
          </Link>
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
          />
        </div>
      </div>
    </header>
  );
}
