import { useState, useEffect } from "react"
import GPUContext from "./GPUContext";

const GPUState = (props) => {

  const [gpus, setGPUs] = useState( [] )
  const host = 'http://localhost:5000'
  const [totalResults, setTotalResults] = useState(null)

  const getGPUs = async (pageSize, page, searchTerm, sort) => {
    const response = await fetch(`${host}/api/gpu/getgpu/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ pageSize: pageSize, search: searchTerm, sort: sort.parameter, order: sort.order })

    });
    const json = await response.json()
    setGPUs(json.result)
    setTotalResults(json.totalLength)
  }  

  return (
    <GPUContext.Provider value={{ gpus, getGPUs, totalResults }}>
      { props.children };
    </GPUContext.Provider>
  )
}

export default GPUState;



