import PlantPage from "./plantPage";
import Submit from "./script";
import App from "../App";

function handleClick(){
    let form = document.getElementById("option");
    return(
        alert("farts")
        // <App />
    )
}

function Menu() {
    return (
        <div>
            <form method="" onSubmit={handleClick}>
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
export default Menu;