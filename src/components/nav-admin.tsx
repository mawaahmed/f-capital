import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export function NavAdmin({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: any;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={
              item.isActive ||
              item.items?.some((sub) => location.pathname === sub.url)
            }
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {!item.items ? (
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-2 w-full transition-colors rounded-md",
                          isActive
                            ? "bg-[#00AAFF] text-black px-3 py-2"
                            : "text-black hover:bg-[#00AAFF] "
                        )
                      }
                    >
                      {item.icon && (
                        <span className="block md:block">
                          <item.icon size={16} />
                        </span>
                      )}
                      <span className="hidden md:inline">{item.title}</span>
                    </NavLink>
                  ) : (
                    <>
                      {item.icon && <item.icon className="text-black" />}
                      <span className="text-black">{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-black" />
                    </>
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {item.items && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <NavLink
                          to={subItem.url}
                          className={({ isActive }) =>
                            cn(
                              "block w-full px-3 py-2 rounded-md text-sm transition-colors",
                              isActive
                                ? "bg-[#00AAFF] text-black"
                                : "text-black hover:bg-[#00AAFF] hover:text-white"
                            )
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
