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
        <i className="bi-cpu mx-2"></i>
        Processor: {selectedItem.Processor.CPU_name}

        <button className="hover-button-deselect" onClick={() => removeItem("Processor")}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}

      {/* GPU */}
      {selectedItem.GPU && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi-gpu-card mx-2"></i>
        <p style={{textAlign:"center", margin:"0", padding:"0"}}>Graphics: {selectedItem.GPU.GPU_name}</p>
        
        <button className="hover-button-deselect" onClick={() => removeItem("GPU")}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}

      {/* Memory */}
      {selectedItem.RAM && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i class="bi bi-memory mx-2"></i>
        <p style={{textAlign:"center", margin:"0", padding:"0"}}>RAM : {selectedItem.RAM.RAM_name}</p>
        
        <button className="hover-button-deselect" onClick={() => removeItem("RAM")}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}

      {/* Motherboard */}
      {selectedItem.Motherboard && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-motherboard mx-2"></i>
        <p style={{textAlign:"center", margin:"0", padding:"0"}}>Motherboard: {selectedItem.Motherboard.GPU_name}</p>

        <button className="hover-button-deselect" onClick={() => removeItem("Motherboard")}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}


      {/* PSU */}
      {selectedItem.PSU && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-plug-fill mx-2"></i>
        <p style={{textAlign:"center", margin:"0", padding:"0"}}>PSU: {selectedItem.PSU.PSU_name}</p>
        <button className="hover-button-deselect" onClick={() => removeItem("PSU")}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>}


      {/* Case */}
      {selectedItem.Case && <div className='text-light bg-success' style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
        <i className="bi bi-motherboard mx-2" ></i>
        <p style={{textAlign:"center", margin:"0", padding:"0"}}>Case: {selectedItem.Case.Case_name}</p>
        <button className="hover-button-deselect" onClick={() => removeItem("Case")}>
          <i className="fa-solid fa-xmark"></i>
      </button>
      </div>}


      {Object.entries(selectedItem).length === 0 && <div className='text-info text-center' style={{ marginTop: "140px" }}>Drag here to add components</div>}
    </div>



  )
}

export default List
