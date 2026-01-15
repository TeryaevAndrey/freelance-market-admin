import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { InfoCard } from "@/shared/ui/info-card";
import { Wallet, WalletCards } from "lucide-react";

export const FinanceBriefCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CardTitle>Финансы (кратко)</CardTitle>
          <Button variant="outline" size="sm">
            Открыть
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoCard
            className="sm:col-span-2"
            icon={<Wallet size={16} />}
            title="Баланс"
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
      </CardContent>
    </Card>
  );
};
