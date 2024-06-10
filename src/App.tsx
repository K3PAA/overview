import axios from "axios";
import { useEffect } from "react";

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
    <div>
      <h1 className="bg-red-500">Helo world </h1>
    </div>
  );
};

export default App;
