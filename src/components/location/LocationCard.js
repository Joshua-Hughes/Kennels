import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ locations }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${locations.id}`}>
                { locations.name }
            </Link>
        </h3>
        <div className="location__street">{locations.address}</div>
    </section>
)