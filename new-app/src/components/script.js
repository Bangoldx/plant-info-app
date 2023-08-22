import App from "../App";
import plantPage from "./plantPage";

window.addEventListener("load", function () {
    let form = this.document.getElementById("form");
    form.addEventListener("submit", function (event) {
        let selectedPlant = document.querySelector("option[name=plants]").value;

        if (selectedPlant === "") {
            alert("Please select a plant")
            event.preventDefault();
        } else {
            return(
                <div>
                <App />
                </div>
            )
        }

    });
});