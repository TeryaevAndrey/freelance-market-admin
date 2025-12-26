import { SidebarToggle } from "@/features/sidebar-toggle";
import { ThemeButton } from "@/features/theme-switcher";
import { GlobalSearch } from "@/widgets/global-search";
import { NotificationsCenter } from "@/widgets/notifications-center";

export const DashboardHeader = () => {
  return (
    <header className="px-4 lg:px-6 py-4 border-b flex justify-between items-center gap-6 h-17.5">
      <SidebarToggle />
      <div className="flex justify-end items-center gap-2 w-full">
        <GlobalSearch />
        <NotificationsCenter />
        <ThemeButton />
      </div>
    </header>
  );
};
