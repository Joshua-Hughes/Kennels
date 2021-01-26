import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employees }) => (
    <section className="employee">
        <h3 className="employee__name">
            <Link to={`/employees/detail/${employees.id}`}>
                { employees.name}
            </Link>
        </h3>
        <div className="employee__location">{employees.location.address}</div>
    </section>
)