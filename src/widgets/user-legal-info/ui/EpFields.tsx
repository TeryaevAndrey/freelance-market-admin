import { ParameterCard } from "@/shared/ui/parameter-card"

export const EpFields = () => {
    return(
        <>
            <ParameterCard name="ФИО" value="Петренко Петр Петрович" />
            <ParameterCard name="Торговое название" value="Праздник без хлопот" />
            <ParameterCard name="ИНН" value="65216216" />
            <ParameterCard name="ОГРНИП" value="123123232" />
            <ParameterCard name="Дата регистрации ИП" value="12.12.2025" />
            <ParameterCard name="Адрес регистрации ИП" value="Хороший адрес" />
        </>
    )
}