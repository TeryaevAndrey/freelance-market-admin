import { toast } from "sonner";

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Скопировано!");
};
