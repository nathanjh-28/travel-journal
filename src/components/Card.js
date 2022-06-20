import React from "react";

export default function Card() {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src="https://source.unsplash.com/WLxQvbMyfas" width="400px" />
                </div>

                <div className="card-text">
                    <i className="fa-solid fa-location-dot dis-inline" aria-hidden="true"></i>
                    <p className="country-name dis-inline body-text">Japan</p>
                    <a href="" className="body-text">View on Google Maps</a>
                    <h2 className="destination-title">Mount Fuji</h2>
                    <p className="bold body-text">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="descr body-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </>
    )
}