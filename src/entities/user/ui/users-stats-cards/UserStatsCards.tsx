import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { StatsCard } from "./StatsCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: {
    total: number;
    active: number;
    pending: number;
    verification: number;
    blocked: number;
  };
}

export const UserStatsCards = ({ className, data }: Props) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", className)}>
      <StatsCard
        title="Пользователей"
        description="По текущим условиям"
        count={data.total}
      />
      <StatsCard title="Активные" description="Норма" count={data.active} />
      <StatsCard
        title="Ожидают"
        description="Нужна проверка"
        count={data.pending}
      />
      <StatsCard
        title="Верификация"
        description="Документы / модерация"
        count={data.verification}
      />
      <StatsCard
        title="Заблокированы"
        description="Риск / нарушения"
        count={data.blocked}
      />
    </div>
  );
};
