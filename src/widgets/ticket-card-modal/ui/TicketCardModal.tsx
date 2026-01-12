import { TicketMessage } from "@/entities/ticket";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import type { DialogProps } from "@radix-ui/react-dialog";
import { ArrowDownUp, ExternalLink, Scale3D, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface Props extends DialogProps {}

export const TicketCardModal = ({ open, onOpenChange }: Props) => {
  const form = useForm<{
    responsible: string;
    status: string;
    description: string;
  }>({
    defaultValues: {
      responsible: "",
      status: "new",
      description: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon-sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Открыть карточку</TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Карточка тикета</DialogTitle>
          <DialogDescription>TCK-80360 - @performer_lite</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle className="text-sm">Переписка</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/dashboard/tickets/1">
                      <span>Открыть страницу тикета</span>
                      <ExternalLink />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <TicketMessage variant="user" />
                    <TicketMessage variant="support" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Действия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Users />
                      <span>Назначить</span>
                    </Button>
                    <Button variant="warning" size="sm">
                      <ArrowDownUp />
                      <span>Статус</span>
                    </Button>
                    <Button variant="default" size="sm">
                      <Scale3D />
                      <span>Передать</span>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <FormField
                      control={form.control}
                      name="responsible"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ответственный</FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              name={field.name}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите ответственного" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="item-1">Item-1</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Статус</FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              name={field.name}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите статус" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="new">Новый</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Комментарий</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Коротко: что сделано / что нужно от пользователя"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" size="sm">
                  Закрыть
                </Button>
                <Button variant="success" size="sm">
                  Сохранить
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
