import { ParameterCard } from "@/shared/ui/parameter-card";

export const PrivatePersonFields = () => {
  return (
    <>
      <ParameterCard name="Серия и номер паспорта:" value="1232 123232" />
      <ParameterCard name="Когда выдан:" value="12.12.2025" />
      <ParameterCard name="Кем выдан:" value="Выдан человеком" />
      <ParameterCard name="Код подразделения:" value="923" />
      <ParameterCard name="Адрес регистрации" value="Хороший адрес" />
    </>
  );
};
