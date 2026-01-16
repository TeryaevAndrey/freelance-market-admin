import { AddMoneyButton, DebitMoneyButton, ToggleHold } from "@/features/manage-user";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { InfoCard } from "@/shared/ui/info-card";
import { KeyRound, Wallet, WalletCards } from "lucide-react";

export const UserBalanceCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <CardTitle>Баланс</CardTitle>
          <Badge variant="outline">
            <KeyRound />
            деньги
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <InfoCard
            icon={<Wallet size={16} />}
            title="Итого"
            valueText="12 450 Р"
          />
          <InfoCard
            icon={<WalletCards size={16} />}
            title="В холде"
            valueText="3 000 Р"
          />
          <InfoCard
            icon={<Wallet size={16} />}
            title="Доступно"
            valueText="9 450 Р"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
            <AddMoneyButton />
            <DebitMoneyButton />
            <ToggleHold />
        </div>
      </CardContent>
    </Card>
  );
};
