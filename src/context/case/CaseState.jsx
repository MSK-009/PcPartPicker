import { useState, useEffect } from "react"
import CaseContext from "./CaseContext";

const CaseState = (props) => {

  const [cases, setCases] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getCases = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/case/getcase/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })

    });
    const json = await response.json()
    setCases(json.result)
    setTotalResults(json.totalLength)
  }  

  return (
    <CaseContext.Provider value={{ cases, getCases, totalResults }}>
      { props.children };
    </CaseContext.Provider>
  )
}

export default CaseState;



