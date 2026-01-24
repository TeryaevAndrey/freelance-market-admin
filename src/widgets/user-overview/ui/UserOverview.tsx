import { FinanceBriefCard, LastEvents } from "@/entities/user";
import { ContactsCard } from "@/widgets/contacts-card";

export const UserOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      <ContactsCard />
      <FinanceBriefCard />
      <LastEvents />
    </div>
  );
};
