import { useState, useEffect } from "react"
import RAMContext from "./RAMContext";

const RAMState = (props) => {

  const [rams, setRAMs] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getRAMs = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/ram/getram/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })

    });
    const json = await response.json()
    console.log(json.result);
    setRAMs(json.result)

    setTotalResults(json.totalLength)
  }  

  return (
    <RAMContext.Provider value={{ rams, getRAMs, totalResults }}>
      { props.children };
    </RAMContext.Provider>
  )
}

export default RAMState;



