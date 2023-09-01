import React from "react";
import "./styles.css";

const PlantPage = ({ plant }) => {
    {
        {
            plant.map((data, id) => {
                return (
                    <div>
                        <img key={id}>{data.image}</img>
                        <h1 key={id}>{data.name}</h1>
                    </div>
                )
            })
        }
        {
            plant.map((data, id) => {
                return (
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr key={id}></tr>
                        <td><label key={id}>{id}</label>{data.name}</td>
                        <td><label key={id}>{id}</label>{data.type}</td>
                        <td><label key={id}>{id}</label>{data.water}</td>
                        <td><label key={id}>{id}</label>{data.light}</td>
                        <td><label key={id}>{id}</label>{data.temperature}</td>
                        </tbody>
                    </table>
                )
            })
        }

    }

}

export default PlantPage;