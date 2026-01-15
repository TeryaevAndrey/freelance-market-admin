import { ContactsCard, FinanceBriefCard, LastEvents } from "@/entities/user"


export const UserOverview = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <ContactsCard />
            <FinanceBriefCard />
            <LastEvents />
        </div>
    )
}