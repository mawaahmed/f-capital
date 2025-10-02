"use client";

import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser() {
  const logoutUser = () => {
    console.log("Logout clicked"); 
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  src="https://i.pravatar.cc/40?img=12"
                  alt="User Avatar"
                />
                <AvatarFallback className="rounded-lg">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight text-white">
                <span className="truncate font-medium">John Doe</span>
                <span className="truncate text-xs text-white">
                  john.doe@example.com
                </span>
              </div>
              <LogOut
                className="ml-auto size-4 cursor-pointer text-white"
                onClick={() => logoutUser()}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
