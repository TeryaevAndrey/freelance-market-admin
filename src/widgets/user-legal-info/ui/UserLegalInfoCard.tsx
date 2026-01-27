import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderRow,
  CardTitle,
} from "@/shared/ui/card";
import type { HTMLAttributes } from "react";
import { PrivatePersonFields } from "./PrivatePersonFields";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UserLegalInfoCard = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <CardHeaderRow>
          <CardTitle>Юридическая информация</CardTitle>

          <Badge variant="outline">ИП</Badge>
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <PrivatePersonFields />
          {/* <SelfEmployedFields />
          <EpFields />
          <LegalEntityFields /> */}
        </div>
      </CardContent>
    </Card>
  );
};
