import { useStore } from "../../store/Zustand";

export const ScoreCard = () => {
  const score = useStore((s) => s.user.score);
  const updateUser = useStore((s) => s.updateUser);

  return (
    <div>
      <input
        type="number"
        value={score}
        onChange={(ev) => updateUser({ score: parseInt(ev.target.value) })}
        placeholder="Score"
      />
    </div>
  );
};
