import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { IconBox } from "@/shared/ui/icon-box";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { Text } from "@/shared/ui/text";
import { LayoutDashboard, LogOut, MapPinHouse, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="h-17.5 flex justify-center px-4">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <IconBox>PM</IconBox>
            <div className="flex flex-col">
              <Text size="default" weight="bold">
                Prazdnik.Market
              </Text>
              <Text size="xs">Admin Panel</Text>
            </div>
          </div>

          <Badge variant="outline">v1</Badge>
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-7">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard">
                    <IconBox size="md">
                      <LayoutDashboard />
                    </IconBox>
                    <span>Дашборд</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard/users">
                    <IconBox size="md">
                      <Users />
                    </IconBox>
                    <span>Пользователи</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard/users">
                    <IconBox size="md">
                      <MapPinHouse />
                    </IconBox>
                    <span>Пространства</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t py-4 flex flex-col gap-3 px-4">
        <div className="flex justify-between items-center gap-3">
          <Text>Права: Super Admin</Text>
          <Badge>Online</Badge>
        </div>

        <Button
          className="border-destructive text-destructive hover:bg-destructive hover:text-white"
          variant="outline"
          size="sm"
        >
          <span>Выйти</span>
          <LogOut />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
