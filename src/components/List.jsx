import React, { useContext } from 'react'
import ListContext from '../context/list/ListContext'


const List = (props) => {

  const listContext = useContext(ListContext)
  const { selectedItem, removeItem } = listContext

  return (
    <div style={{ margin: "20px" }}>
      <h3 className='text-success mb-3'>Your Parts</h3>

      {/* CPU */}
      {selectedItem.Processor && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi-cpu"></i>
        Processor: {selectedItem.Processor.CPU_name}
        <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem("Processor") }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}

      {/* GPU */}
      {selectedItem.GPU && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi-gpu-card"></i>
        Graphics: {selectedItem.GPU.GPU_name}
        <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem("GPU") }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}

      {/* Motherboard */}
      {selectedItem.Motherboard && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-motherboard"></i>
        Motherboard: {selectedItem.Motherboard.GPU_name}
        <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem("Motherboard") }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}


      {/* PSU */}
      {selectedItem.PSU && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-plug-fill"></i>
        PSU: {selectedItem.PSU.PSU_name}
        <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem("PSU") }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}


      {/* Case */}
      {selectedItem.Case && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-motherboard"></i>
        Case: {selectedItem.Case.Case_name}
        <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem("Case") }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}


      {Object.entries(selectedItem).length === 0 && <div className='text-info text-center' style={{ marginTop: "140px" }}>Drag here to add components</div>}
    </div>



  )
}

export default List
