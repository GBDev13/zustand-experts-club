import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = {
  fullName: string;
  email: string;
  score: number;
};

type Store = {
  user: User;
  updateUser: (data: Partial<User>) => void;
};

export const useStore = create<Store>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          user: {
            fullName: "",
            score: 0,
            email: "",
          },
          updateUser: (user: Partial<User>) => {
            set((state) => {
              state.user = { ...state.user, ...user };
            });
          },
        }),
        {
          name: "user-store-persist",
        }
      )
    )
  )
);
