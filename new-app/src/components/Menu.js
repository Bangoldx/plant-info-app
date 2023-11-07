import PlantPage from "./plantPage";
import Submit from "./script";
import App from "../App";
import plantData from "./plantData";
import { useState } from "react";

function HandleClick(){
    let form = document.getElementById("plants");
    const [plant, setPlant] = useState(plantData);
  const displayPlants = [...new Set(plantData.map((data) => data.id))];

  const filterByType = (currentType) => {
    const displayPlants = plantData.filter((newPlantDisplay) => {
      return newPlantDisplay.data === currentType;
    });
    setPlant(displayPlants);
  }
}

function Menu() {
    return (
        <div>
            <form method="" onSubmit={HandleClick}>
                <label>
                    <select name="plants">
                        <option value="">Pick your plant</option>
                        <option value="1">Ficus Ginseng Bonsai</option>
                        <option value="2">White Fox Aloe</option>
                        <option value="3">Frech Lavendar</option>
                        <option value="4">Tropical Banana</option>
                        <option value="5">Hens and Chicks</option>
                        <option value="6">Wandering Jew</option>
                        <option value="7">Purslane</option>
                        <option value="8">Lemon Balm</option>
                        <option value="9">Catnip</option>
                        <option value="10">Spearmint</option>
                        <option value="11">Rosemary</option>
                    </select>
                </label>
                <input type="submit" name="Check the plant!" />
                {/* <button>Check the plant!</button> */}
            </form>
        </div>
    )
}
console.log(Menu.value);
export default Menu;