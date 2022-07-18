import { useStore } from "../store/Zustand";

export function defineUserOutsideReact() {
  const { updateUser } = useStore.getState();
  updateUser({ fullName: "John Doe", email: "john@doe.com", score: 100 });
}
