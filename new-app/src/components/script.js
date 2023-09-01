import App from "../App";
import PlantPage from "./plantPage";

function Submit(){
window.addEventListener("load", function () {
    let form = this.document.getElementById("form");
    form.addEventListener("submit", function (event) {
        let selectedPlant = document.querySelector("option[name=plants]").value;

        if (selectedPlant === "") {
            alert("Please select a plant")
            event.preventDefault();
        } else {
            alert("submit works");
            // return(
            //     <div>
            //     <PlantPage />
            //     </div>
            // )
        }

    });
})
};

export default Submit;