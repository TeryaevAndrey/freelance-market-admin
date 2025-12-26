import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Bell } from "lucide-react";

export const NotificationsCenter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <Bell />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end"> 
        <div></div>
      </PopoverContent>
    </Popover>
  );
};
