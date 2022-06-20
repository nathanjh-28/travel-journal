import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import './style.css'

export default function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Card />
                <Card />
            </div>
        </>
    )
}