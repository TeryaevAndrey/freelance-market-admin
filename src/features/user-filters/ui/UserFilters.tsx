import { Card, CardContent } from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { useUserFilters } from "../model/useUserFilters";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { SelectWithSearch } from "@/shared/ui/select-with-search";
import { DatePicker } from "@/shared/ui/date-picker";
import { useQuery } from "@tanstack/react-query";
import { USER_STATUS_NAMES, userQueries } from "@/entities/user";
import { useRegions } from "@/shared/contexts/RegionsContext";
import { format, isValid } from "date-fns";

export const UserFilters = () => {
  const form = useUserFilters();
  const { data: roles } = useQuery(
    userQueries.roles({ page: 1, page_size: 100 }),
  );
  const { cities } = useRegions();

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <div className="flex flex-wrap gap-4">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Поиск</FormLabel>
                  <FormControl>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="ID, имя, email, город..."
                        {...field}
                      />
                      <InputGroupAddon align="inline-end">
                        <Search />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex flex-wrap gap-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Роль</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        name={field.name}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите роль" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="all">Все</SelectItem>
                            {roles?.results.map((role) => (
                              <SelectItem key={role.id} value={role.name}>
                                {role.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите статус" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="all">Все</SelectItem>
                            {Object.entries(USER_STATUS_NAMES).map(
                              ([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ),
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Город</FormLabel>
                    <FormControl>
                      <SelectWithSearch
                        placeholder="Выберите город"
                        list={[
                          { value: "all", label: "Все" },
                          ...(cities?.map((city) => ({
                            value: String(city.id),
                            label: city.name,
                          })) || []),
                        ]}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Дата регистрации (от)</FormLabel>
                    <FormControl>
                      <DatePicker
                        value={
                          field.value && isValid(new Date(field.value))
                            ? new Date(field.value)
                            : undefined
                        }
                        onChange={(date) => {
                          if (date) {
                            const formattedDate = format(date, "yyyy-MM-dd");
                            field.onChange(formattedDate);
                          } else {
                            field.onChange("");
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Дата регистрации (до)</FormLabel>
                    <FormControl>
                      <DatePicker
                        value={
                          field.value && isValid(new Date(field.value))
                            ? new Date(field.value)
                            : undefined
                        }
                        onChange={(date) => {
                          if (date) {
                            const formattedDate = format(date, "yyyy-MM-dd");
                            field.onChange(formattedDate);
                          } else {
                            field.onChange("");
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};
