import { getFullName } from "@/entities/user";
import { useUserContext } from "@/pages/dashboard/user"
import { ParameterCard } from "@/shared/ui/parameter-card"
import { format } from "date-fns";

export const EpFields = () => {
    const {user} = useUserContext();

    return(
        <>
            <ParameterCard name="ФИО" value={getFullName(user.first_name, user.last_name, user.third_name) || "-"} />
            <ParameterCard name="Торговое название" value={user.trade_mark || "-"} />
            <ParameterCard name="ИНН" value={user.tax_id || "-"} />
            <ParameterCard name="ОГРНИП" value={user.ogrn ? String(user.ogrn) : "-"} />
            <ParameterCard name="Дата регистрации ИП" value={user.incorp_date ? format(new Date(user.incorp_date), 'dd.MM.yyyy') : "-"} />
            <ParameterCard name="Адрес регистрации ИП" value={user.reg_adress || "-"} />
        </>
    )
}