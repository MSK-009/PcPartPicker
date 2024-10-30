import { useState, useEffect } from "react"
import SSDContext from "./SSDContext";

const GPUState = (props) => {

  const [ssds, setSSDs] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getSSDs = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/ssd/getssd/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })

    });
    const json = await response.json()
    setSSDs(json.result)
    setTotalResults(json.totalLength)
  }  

  return (
    <SSDContext.Provider value={{ ssds, getSSDs, totalResults }}>
      { props.children };
    </SSDContext.Provider>
  )
}

export default GPUState;



