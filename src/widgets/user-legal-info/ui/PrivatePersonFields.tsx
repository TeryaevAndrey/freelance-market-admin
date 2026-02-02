import { useUserContext } from "@/pages/dashboard/user";
import { ParameterCard } from "@/shared/ui/parameter-card";
import { format } from "date-fns";

export const PrivatePersonFields = () => {
  const { user } = useUserContext();

  return (
    <>
      <ParameterCard
        name="Серия и номер паспорта:"
        value={
          user.passport_series && user.passport_number
            ? `${user.passport_series} ${user.passport_number}`
            : "-"
        }
      />
      <ParameterCard
        name="Когда выдан:"
        value={
          user.passport_date
            ? format(new Date(user.passport_date), "dd.MM.yyyy")
            : "-"
        }
      />
      <ParameterCard name="Кем выдан:" value={user.passport_authority || "-"} />
      <ParameterCard
        name="Код подразделения:"
        value={user.passport_authority_code || "-"}
      />
      <ParameterCard name="Адрес регистрации" value={user.reg_adress || "-"} />
    </>
  );
};
