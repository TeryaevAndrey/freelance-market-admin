import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  count?: number;
}

export const StatsCard = ({ title, description, count = 0 }: Props) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text size="3xl" weight="bold">
          {count}
        </Text>
      </CardContent>
      {Boolean(description) && (
        <CardFooter>
          <Text size="default">{description}</Text>
        </CardFooter>
      )}
    </Card>
  );
};
