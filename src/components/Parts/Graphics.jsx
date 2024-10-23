import React, { useState, useRef, useContext } from 'react'
import GraphicsCard from './GraphicsCard'
import ListContext from '../../context/list/ListContext'
import GPUContext from '../../context/gpu/GPUContext'

const Graphics = () => {


  const gpuContext = useContext(GPUContext)

  const { gpus } = gpuContext

  const listContext = useContext(ListContext)
  const { onDragOver, onDrop, selectedItem, removeItem } = listContext

  const [ gpu, setGPU ] = useState({
    name: "",
    codename: "",
    clock: "",
    process: "",
    tdp: "",
    released: ""
  })

  const ref = useRef(null)
  const refClose = useRef(null)

  const showGPU = (currentGPU) => {
    ref.current.click()
    setGPU({
      image: currentGPU.Image,
      name: currentGPU.GPU_name,
      codename: currentGPU.Codename,
      process: currentGPU.Process,
      tdp: currentGPU.TDP,
      released: currentGPU.Released,
      price: currentGPU.Price

    })

  }


  return (
    <>
      {/* Modal for showing info */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{gpu.name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src={gpu.image} className='img-fluid'></img>
            <div className="modal-body">
              <p>Codename: {gpu.codename}</p>
              <p>Process node: {gpu.process}</p>
              <p>Power Consuption: {gpu.tdp}</p>
              <p>Released in: {gpu.released}</p>
              <p>Price: {gpu.price}</p>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Button to activate modal */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* Sort */}
      <div className='d-flex justify-content-end mt-3 me-4'>
        <div className="dropdown">
          <button className="btn btn-black text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu dropdown-menu-light">
            <li><button className="dropdown-item">Price: Ascending</button></li>
            <li><button className="dropdown-item">Price: Descending</button></li>
            <li><hr className="dropdown-divider text-primary" /></li>
            <li><button className="dropdown-item">Released: Newest</button></li>
            <li><button className="dropdown-item">Released: Oldest</button></li>
          </ul>
        </div>
      </div>

      <div className='d-flex flex-column flex-sm-row my-5'>
        {/* For screen sizes below 576px */}
        <button className="btn btn-primary d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Filter
        </button>
        <div>
          <div className="collapse d-sm-none" id="collapseExample">
            <div className="input-group">
              <input type="search" className="form-control" id="searchWithIcon" placeholder="Search.." aria-label="Search" aria-describedby="searchIcon" />
              <button className="btn btn-success" id="searchIcon">
                <i className="bi bi-search"></i>
              </button>
            </div>

          </div>

          {/* For all sizes above 576px */}
          <div className="d-none d-sm-block">
            <div className="mb-3">
              <div className="input-group">
                <input type="search" className="form-control" id="searchWithIcon" placeholder="Search..." aria-label="Search" aria-describedby="searchIcon" />
                <button className="btn btn-success" id="searchIcon">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>

            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'selectedItem')} style={{ backgroundColor: "#DCF1E4", height: "400px", width: "400px", padding: '10px', border: "5px dashed green", borderRadius: "20px" }}>
              <div style={{ margin: "20px" }}>
                <h3 className='text-success mb-3'>Your Parts</h3>
                {selectedItem && Object.entries(selectedItem).map(([key, value], index) => (
                  <div className='text-light bg-success' key={index} style={{ borderRadius: "8px", padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
                    <i className="bi-cpu"></i>
                    {key}: {value.CPU_name || value.GPU_name}
                    <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "white" }} onClick={() => { removeItem(key) }}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
                {Object.entries(selectedItem).length === 0 && <div className='text-info text-center' style={{ marginTop: "140px" }}>Drag here to add components</div>}
              </div>
            </div>
          </div>
        </div>

        <div onDragOver={(e) => onDragOver(e)} className='container d-flex flex-wrap gap-3 align-items-center justify-content-center'>
          {gpus.map((gpu) => { return <GraphicsCard gpu={ gpu } key={ gpu.GPU_name } showGPU={ showGPU } /> })}
        </div>
      </div>


    </>
  )
}

export default Graphics
