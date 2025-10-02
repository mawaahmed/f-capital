import { NavLink, useLocation } from "react-router"
import { type LucideIcon } from "lucide-react"


import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathname = useLocation().pathname // Get the current pathname from the location object
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Navigation */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title} isActive={pathname === item.url}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`
                  }
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
