import { ParameterCard } from "@/shared/ui/parameter-card"

export const LegalEntityFields = () => {
    return(
        <>
            <ParameterCard name="ФИО ответственного лица" value="Иванов Иван Иванович" />
            <ParameterCard name="Должность ответственного лица" value="Администратор" />
            <ParameterCard name="Полное юр. наименования" value="ООО Салют" />
            <ParameterCard name="ИНН" value="51232312" />
            <ParameterCard name="ОГРН" value="123123232" />
            <ParameterCard name="КПП" value="12321323" />
            <ParameterCard name="Юридический адрес" value="Хороший адрес" />
            <ParameterCard name="Почтовый адрес" value="Хороший адрес" />
            <ParameterCard name="Контактный e-mail" value="test@mail.ru" />
            <ParameterCard name="Контактый телефон" value="+7 916 xxx xx xx" />
            <ParameterCard name="ФИО ген. директора" value="Иванов Иван Иванович" />
        </>
    )
}