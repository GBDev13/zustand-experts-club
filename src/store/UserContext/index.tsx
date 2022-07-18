import { createContext, ReactNode, useState } from "react";

type User = {
  fullName: string;
  email: string;
  score: number;
};

interface IUserContext {
  user: User;
  updateUser: (updatedData: Partial<User>) => void;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    email: "",
    fullName: "",
    score: 0,
  });

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  // useEffect(() => {
  //   // persist data
  //   localStorage.setItem('user', JSON.stringify(user));
  // }, [])

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
