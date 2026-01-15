import { PublicLinksCard, ServicesCard } from "@/entities/user"
import { VenuesCard } from "@/entities/venue"

export const UserContent = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <PublicLinksCard className="lg:col-span-2" />
            <ServicesCard />
            <VenuesCard />
        </div>
    )
}