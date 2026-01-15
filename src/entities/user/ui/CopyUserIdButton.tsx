import { Button } from "@/shared/ui/button";
import { Copy } from "lucide-react";

export const CopyUserIdButton = () => {
  return (
    <Button variant="outline" size="sm">
      <Copy />
      <span>Копировать ID</span>
    </Button>
  );
};
