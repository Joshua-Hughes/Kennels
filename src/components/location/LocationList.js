import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])


  return (
    <div className="locations">
      <button onClick={() => { history.push("/locations/create") }}>
        New Location
      </button>

      {
        locations.map(locations => {
          return <LocationCard key={locations.id} locations={locations} />
        })
      }
    </div>
  )
}
