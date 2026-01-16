import { OrdersAndTransactionsCard } from "@/widgets/orders-and-transactions-card"

export const UserOrdersAndTransactions = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <OrdersAndTransactionsCard className="lg:col-span-2" />
        </div>
    )
}