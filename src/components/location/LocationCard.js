import React from "react"
import "./Location.css"

export const LocationCard = ({ locations }) => (
    <section className="location">
        <h3 className="location__name">{locations.name}</h3>
        <div className="location__street">{locations.address}</div>
    </section>
)