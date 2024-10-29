import { useState } from "react"
import PSUContext from "./PSUContext";

const PSUState = (props) => {

  const [psus, setPSUs] = useState( [] )
  const host = 'http://localhost:5000'
  const [ page, setPage ] = useState( 1 )
  const [ pageSize, setPageSize ] = useState( 9 )
  const [ search, setSearch ] = useState('')

  const getPSUs = async () => {
    const response = await fetch(`${host}/api/psu/getallPSUs/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'pageSize': `${pageSize}`
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  return (
    <PSUContext.Provider value={{ psus, getPSUs }}>
      { props.children };
    </PSUContext.Provider>
  )
}

export default PSUState;



