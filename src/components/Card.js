import React from "react";

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    {/*props.card for url*/}
                    <img src={props.card.imageUrl} width="400px" />
                </div>

                <div className="card-text">
                    <i className="fa-solid fa-location-dot dis-inline" aria-hidden="true"></i>
                    <p className="country-name dis-inline body-text">{props.card.location}</p>
                    {/*props.card for url*/}
                    <a href={props.card.googleMapsUrl} className="body-text">View on Google Maps</a>
                    <h2 className="destination-title">{props.card.title}</h2>
                    <p className="bold body-text">{props.card.startDate} - {props.card.endDate}</p>
                    <p className="descr body-text">{props.card.description}</p>
                </div>
            </div>
        </>
    )
}