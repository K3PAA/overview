import axios from "axios";
import { useEffect } from "react";
import { Header } from "./components";

const App = () => {
  useEffect(() => {
    const getPlayerData = async () => {
      const player_id = "TeKrop-2217";
      const response = await axios.get(
        `https://overfast-api.tekrop.fr/players/${player_id}/summary`,
      );

      console.log(response.data);
    };

    getPlayerData();
  }, []);
  return (
    <main className="relative">
      <Header />
      <button className="btn">Button</button>

      <img
        src="/over_hero_desktop.png"
        alt=""
        className="absolute inset-0 z-[-100] brightness-75"
      />
    </main>
  );
};

export default App;
