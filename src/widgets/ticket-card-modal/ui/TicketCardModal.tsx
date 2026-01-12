import { TicketManagementForm } from "@/features/ticket-management";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import type { DialogProps } from "@radix-ui/react-dialog";
import { ExternalLink } from "lucide-react";

interface Props extends DialogProps {}

export const TicketCardModal = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon-sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Открыть карточку</TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Карточка тикета</DialogTitle>
          <DialogDescription>TCK-80360 - @performer_lite</DialogDescription>
        </DialogHeader>
        <TicketManagementForm />
      </DialogContent>
    </Dialog>
  );
};
