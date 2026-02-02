import { useUserContext } from "@/pages/dashboard/user"
import { ParameterCard } from "@/shared/ui/parameter-card"

export const LegalEntityFields = () => {
    const {user} = useUserContext();
    
    return(
        <>
            <ParameterCard name="ФИО ответственного лица" value={user.rep_name || "-"} />
            <ParameterCard name="Должность ответственного лица" value={user.rep_role || "-"}/>
            <ParameterCard name="Полное юр. наименования" value={user.legal_name || "-"} />
            <ParameterCard name="ИНН" value={user.tax_id || "-"} />
            <ParameterCard name="ОГРН" value={user.ogrn ? String(user.ogrn) : "-"} />
            <ParameterCard name="КПП" value={user.reason_code || "-"} />
            <ParameterCard name="Юридический адрес" value={user.reg_adress || "-"} />
            <ParameterCard name="Почтовый адрес" value={user.post_adress || "-"} />
            <ParameterCard name="Контактный e-mail" value={user.email2 || "-"} />
            <ParameterCard name="Контактый телефон" value={user.phone_number2 || "-"} />
            <ParameterCard name="ФИО ген. директора" value={user.ceo_name || "-"} />
        </>
    )
}