import { useState, useEffect } from "react"
import ProcessorContext from "./ProcessorContext";

const ProcessorState = (props) => {
  const [processors, setProcessors] = useState([])
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getProcessors = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/processor/getprocessors/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })
    });
    const json = await response.json()
    setProcessors(json.result)
    setTotalResults(json.totalLength)
  }  

  return (
    <ProcessorContext.Provider value={{ processors, getProcessors, totalResults }}>
      {props.children}
    </ProcessorContext.Provider>
  )
}

export default ProcessorState;