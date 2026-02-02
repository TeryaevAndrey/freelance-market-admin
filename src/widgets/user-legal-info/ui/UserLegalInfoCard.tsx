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
import { useUserContext } from "@/pages/dashboard/user";
import { LEGAL_STATUSES } from "@/entities/user";
import { SelfEmployedFields } from "./SelfEmployedFields";
import { EpFields } from "./EpFields";
import { LegalEntityFields } from "./LegalEntityFields";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UserLegalInfoCard = ({ className }: Props) => {
  const {user} = useUserContext();

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
          {
            user.legal_structure === LEGAL_STATUSES.PRIVATE_PERSON && (
              <PrivatePersonFields />
            )
          }
          {
            user.legal_structure === LEGAL_STATUSES.NPD_PAYER && (
              <SelfEmployedFields />
            )
          }
          {
            user.legal_structure === LEGAL_STATUSES.BUSINESSMAN && (
              <EpFields />
            )
          }
          {
            user.legal_structure === LEGAL_STATUSES.BUSINESS_SOCIETY && (
              <LegalEntityFields />
            )
          }
        </div>
      </CardContent>
    </Card>
  );
};
