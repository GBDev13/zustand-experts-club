import { useStore } from "../../store/Zustand";

export const Profile = () => {
  const { user } = useStore((s) => s);
  const updateUser = useStore((s) => s.updateUser);

  return (
    <div>
      <input
        type="text"
        value={user.fullName}
        onChange={(ev) => updateUser({ fullName: ev.target.value })}
        placeholder="FullName"
      />
      <input
        type="email"
        value={user.email}
        onChange={(ev) => updateUser({ email: ev.target.value })}
        placeholder="Email"
      />
    </div>
  );
};
