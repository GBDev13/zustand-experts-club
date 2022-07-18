import "./App.css";
import { Profile } from "./components/context/Profile";
import { ScoreCard } from "./components/context/ScoreCard";

import { Profile as ProfileZ } from "./components/zustand/Profile";
import { ScoreCard as ScoreCardZ } from "./components/zustand/ScoreCard";
import { defineUserOutsideReact } from "./utils/defineUserOutsideReact";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Profile />
      <ScoreCard />
      <h1>Zustand</h1>
      <ProfileZ />
      <ScoreCardZ />
      <button onClick={defineUserOutsideReact}>
        Define user outside React
      </button>
    </div>
  );
}

export default App;
