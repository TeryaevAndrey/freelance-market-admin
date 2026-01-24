import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { EditUserForm } from "./EditUserForm"

export const EditUserModal = () => {
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

                <EditUserForm />                
            </DialogContent>
        </Dialog>
    )
}