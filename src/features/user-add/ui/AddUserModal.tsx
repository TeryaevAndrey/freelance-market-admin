import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { AddUserForm } from "./AddUserForm";

export const AddUserModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить пользователя</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление пользователя</DialogTitle>
        </DialogHeader>

        <AddUserForm />
      </DialogContent>
    </Dialog>
  );
};
