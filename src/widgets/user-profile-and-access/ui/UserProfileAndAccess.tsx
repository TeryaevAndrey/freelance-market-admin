import { RolesAndAccessCard, StatusesHistoryCard } from "@/entities/user"

export const UserProfileAndAccess = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <RolesAndAccessCard />
            <StatusesHistoryCard />
        </div>
    )
}