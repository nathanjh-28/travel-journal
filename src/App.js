import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './style.css';
import data from "./data";

export default function App() {

    const cardArr = data.map(card => {
        return (
            <Card card={card} />
        )
    })

    return (
        <>
            <Navbar />
            <div className="container">
                {cardArr}
            </div>
        </>
    )
}