import { useState, useEffect } from "react"
import MoboContext from "./MoboContext";

const MoboState = (props) => {

  const [mobos, setMOBOs] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getMOBOs = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/mobo/getmobo/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })

    });
    const json = await response.json()
    setMOBOs(json.result)
    setTotalResults(json.totalLength)
  }  

  return (
    <MoboContext.Provider value={{ mobos, getMOBOs, totalResults }}>
      { props.children };
    </MoboContext.Provider>
  )
}

export default MoboState;



