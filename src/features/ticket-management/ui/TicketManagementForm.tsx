import { TicketMessage } from "@/entities/ticket";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
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
import { Text } from "@/shared/ui/text";
import { Textarea } from "@/shared/ui/textarea";
import { ArrowDownUp, ExternalLink, Scale3D, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const TicketManagementForm = () => {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Card className="gap-3">
            <CardHeader>
              <CardTitle className="text-sm">Тикет</CardTitle>
            </CardHeader>
            <CardContent>
              <Text size="sm" weight="semibold">
                Как добавить оффлайн-заказ в календарь?
              </Text>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">TCK-80360</Badge>
                <Badge variant="outline">Функционал</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="gap-3">
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

          <Card className="gap-3">
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
  );
};
