import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Parameters } from "@/shared/ui/parameter";
import { Text } from "@/shared/ui/text";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactsCard = () => {
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
                  info@mail.ru{" "}
                  <Text tag="span" size="xs" color="mutedForeground">
                    (подтвержден)
                  </Text>
                </Text>
              ),
            },
            {
              icon: <Phone size={16} />,
              name: "Телефон",
              valueText: (
                <Text size="xs" color="foreground">
                  +7 *** ***-**-**{" "}
                  <Text tag="span" size="xs" color="mutedForeground">
                    (не подтвержден)
                  </Text>
                </Text>
              ),
            },
            {
              icon: <MapPin size={16} />,
              name: "Город",
              valueText: "Курск",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};
