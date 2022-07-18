import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

export const Profile = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        value={context?.user.fullName}
        onChange={(ev) => context?.updateUser({ fullName: ev.target.value })}
        placeholder="FullName"
      />
      <input
        type="email"
        value={context?.user.email}
        onChange={(ev) => context?.updateUser({ email: ev.target.value })}
        placeholder="Email"
      />
    </div>
  );
};
