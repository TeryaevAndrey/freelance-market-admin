import { userQueries, type User } from "@/entities/user";
import { Loader } from "@/shared/ui/loader";
import { Text } from "@/shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode } from "react";

interface UserContextState {
  user: User;
}

const UserContext = createContext<UserContextState | null>(null);

export const UserProvider = ({
  userId,
  children,
}: {
  userId: number;
  children: ReactNode;
}) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(userQueries.detail(userId));

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center grow">
        <Loader />
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex flex-col justify-center items-center grow">
        <Text size="default" fontStyle="italic">
          Ошибка: пользователь не найден
        </Text>
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error("useUserContext must be used within UserProvider");

  return context;
};
