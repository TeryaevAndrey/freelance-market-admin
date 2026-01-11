import { cn } from "@/lib/utils";
import { StatsCard } from "@/shared/ui/stats-card";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: {
    total: number;
    sum: number;
    success: number;
    pending: number;
    problems: number;
  };
}

export const OrderStatsCards = ({ className, data }: Props) => {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className
      )}
    >
      <StatsCard title="Заказы" description="В выборке" count={data.total} />
      <StatsCard
        title="Сумма"
        description="Общая стоимость"
        count="715 000 Р"
      />
      <StatsCard
        title="Оплачено"
        description="По родительским заказам"
        count="447 000 Р"
      />
      <StatsCard title="Ожидают оплату" description="Нужна реакция" count={1} />
      <StatsCard title="Проблемы" description="Внимание поддержки" count={1} />
    </div>
  );
};
