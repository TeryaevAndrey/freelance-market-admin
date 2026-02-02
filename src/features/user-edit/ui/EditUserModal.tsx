import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { EditUserForm } from "./EditUserForm"
import { userQueries, type User } from "@/entities/user";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@/shared/ui/text";

interface Props {
    userId: number;
}

export const EditUserModal = ({userId}: Props) => {
    const {data: user, isPending} = useQuery(userQueries.detail(userId));

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Редактировать
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Редактирование пользователя</DialogTitle>
                </DialogHeader>

                {(user && !isPending) ? (
                    <EditUserForm userId={userId} user={user} />    
                ) : (
                    <Text className="text-center min-h-48" size="sm">Загрузка...</Text>
                )}            
            </DialogContent>
        </Dialog>
    )
}