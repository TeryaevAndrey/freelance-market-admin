import { getCityById, getCityId } from "@/entities/region";
import { useUserContext } from "@/pages/dashboard/user";
import { useRegions } from "@/shared/contexts/RegionsContext";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Parameters } from "@/shared/ui/parameter";
import { Text } from "@/shared/ui/text";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactsCard = () => {
  const { user } = useUserContext();
  const {cities} = useRegions();

  const getCitiesNames = (userCities: string[] = []) => {
    const formattedCities = userCities
      .map((userCity) => {
        const userCityId = getCityId(userCity);
        const city = getCityById(Number(userCityId), cities);

        return city?.name;
      })
      .filter((city) => city !== undefined)
      .join(", ");

    return formattedCities;
  };

  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <CardTitle>Контакты</CardTitle>
          <Badge variant="outline">Служебно</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Parameters
          list={[
            {
              icon: <Mail className="text-muted-foreground" size={16} />,
              name: "Email",
              valueText: (
                <Text size="xs" color="foreground">
                  {user.email ? (
                    <>
                      {user.email}{" "}
                      <Text tag="span" size="xs" color="mutedForeground">
                        (
                        {user.is_email_verified
                          ? "подтвержден"
                          : "не подтвержден"}
                        )
                      </Text>
                    </>
                  ) : (
                    "-"
                  )}
                </Text>
              ),
            },
            {
              icon: <Phone size={16} />,
              name: "Телефон",
              valueText: (
                <Text size="xs" color="foreground">
                  {user.phone_number ? (
                    <>
                      {user.phone_number}{" "}
                      <Text tag="span" size="xs" color="mutedForeground">
                        (
                        {user.is_phone_number_verified
                          ? "подтвержден"
                          : "не подтвержден"}
                        )
                      </Text>
                    </>
                  ) : (
                    "-"
                  )}
                </Text>
              ),
            },
            {
              icon: <MapPin size={16} />,
              name: "Город",
              valueText: getCitiesNames(user.cities) || "-",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};
