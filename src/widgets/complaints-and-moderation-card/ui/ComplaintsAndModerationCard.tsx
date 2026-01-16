import { Complaint } from "@/entities/complaint";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderRow,
  CardTitle,
} from "@/shared/ui/card";
import { MailWarning } from "lucide-react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ComplaintsAndModerationCard = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <CardHeaderRow>
          <CardTitle>Жалобы и модерация</CardTitle>
          <MailWarning size={16} />
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Complaint
            name="Жалоба на исполнителя"
            description="Превышение условий"
          />
          <Complaint
            name="Жалоба от пользователя"
            description="Невозможность оплаты"
          />
        </div>
      </CardContent>
    </Card>
  );
};
