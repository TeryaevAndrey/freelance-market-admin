import { LastEvents } from "@/entities/user";
import { useUserContext } from "@/pages/dashboard/user";
import { ContactsCard } from "@/widgets/contacts-card";
import { UserAdditionalDataCard } from "@/widgets/user-additional-data-card";
import { UserLegalInfoCard } from "@/widgets/user-legal-info";

export const UserOverview = () => {
  const { user } = useUserContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      <ContactsCard />
      <UserAdditionalDataCard className="md:col-span-2 lg:col-span-2" />
      {(user.legal_structure !== null && user.legal_structure !== undefined) && (
        <UserLegalInfoCard className="md:col-span-2 lg:col-span-3" />
      )}
      <LastEvents className="md:col-span-2 lg:col-span-3" />
    </div>
  );
};
