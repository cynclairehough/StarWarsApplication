import React from 'react'
import { useNavigate } from 'react-router-dom'

const Planet = ({ apiResponse }) => {

  return (
    <div>
      {
         apiResponse.results? apiResponse.results.map((planet) => {
            return (
              <div key={planet.name}>
               
              </div>
            )
          }) :null
      }
    </div>
  )
}

export default Planet;