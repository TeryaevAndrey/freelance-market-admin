import { OperationHistoryCard } from "@/widgets/operation-history-card"
import { UserBalanceCard } from "@/widgets/user-balance-card"


export const UserFinance = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <UserBalanceCard />
            <OperationHistoryCard className="lg:col-span-2" />
        </div>
    )
}