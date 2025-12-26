import { AuthCard } from "@/shared/ui/auth-card";
import { SignInForm } from "./SignInForm";

export const SignIn = () => {
  return (
    <AuthCard title="Вход">
      <SignInForm />
    </AuthCard>
  );
};
