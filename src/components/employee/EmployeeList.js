import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
      .then(getEmployees)

  }, [])


  return (
    <div className="employees">
      <button onClick={() => { history.push("/employees/create") }}>
        New Employee
      </button>
      
      {
        employees.map(employees => {
          return <EmployeeCard key={employees.id} employees={employees} />
        })
      }
    </div>
  )
}
