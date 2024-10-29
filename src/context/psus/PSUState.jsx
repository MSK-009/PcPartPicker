import { useState } from "react"
import PSUContext from "./PSUContext";

const PSUState = (props) => {

  const [psus, setPSUs] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getPSUs = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/psu/getpsu/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })


    });
    const json = await response.json()
    setPSUs(json.result)
    setTotalResults(json.totalLength)
  }

  return (
    <PSUContext.Provider value={{ psus, getPSUs, totalResults }}>
      { props.children };
    </PSUContext.Provider>
  )
}

export default PSUState;



