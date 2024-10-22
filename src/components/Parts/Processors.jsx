import React, { useState, useRef, useContext } from 'react'
import Card from './Card'
import ListContext from '../../context/list/ListContext'

const Processors = () => {

  const listContext = useContext(ListContext)
  const { onDragOver, onDrop, selectedItem, removeItem } = listContext


  const [processors, setProcessors] = useState([
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 5 5600G",
      "Codename": "Cezanne",
      "Cores": "6  / 12",
      "Base_clock": "3.9 GHz",
      "Turbo_clock": "4.4 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "16 MB",
      "TDP": "65 W",
      "Released": "Apr 13th, 2021",
      "Price": "$260"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Core Ultra 9 285K",
      "Codename": "Arrow Lake-S",
      "Cores": "24",
      "Base_clock": "3.7 GHz",
      "Turbo_clock": "5.7 GHz",
      "Socket": "1851",
      "Process": "3 nm",
      "L3Cache": "36 MB",
      "TDP": "125 W",
      "Released": "Oct 24th, 2024",
      "Price": "$270"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 7 5700X3D",
      "Codename": "Vermeer",
      "Cores": "8  / 16",
      "Base_clock": "3.0 GHz",
      "Turbo_clock": "4.1 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "96 MB",
      "TDP": "105 W",
      "Released": "Jan 8th, 2024",
      "Price": "$280"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 5 3600",
      "Codename": "Matisse",
      "Cores": "6  / 12",
      "Base_clock": "3.6 GHz",
      "Turbo_clock": "4.2 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "32 MB",
      "TDP": "65 W",
      "Released": "Jul 7th, 2019",
      "Price": "$290"
    }
  ])

  const [processor, setProcessor] = useState({
    name: "",
    codename: "",
    cores: "",
    clock: "",
    socket: "",
    process: "",
    cache: "",
    tdp: "",
    released: ""
  })

  const ref = useRef(null)
  const refClose = useRef(null)

  const showProcessor = (currentProcessor) => {
    ref.current.click()
    setProcessor({
      image: currentProcessor.Image,
      name: currentProcessor.CPU_name,
      codename: currentProcessor.Codename,
      cores: currentProcessor.Cores,
      base: currentProcessor.Base_clock,
      turbo: currentProcessor.Turbo_clock,
      socket: currentProcessor.Socket,
      process: currentProcessor.Process,
      cache: currentProcessor.L3Cache,
      tdp: currentProcessor.TDP,
      released: currentProcessor.Released,
      price: currentProcessor.Price

    })

  }


  return (
    <>
      {/* Modal for showing info */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{processor.name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src={processor.image} className='img-fluid'></img>
            <div className="modal-body">
              <p>Codename: {processor.codename}</p>
              <p>Cores: {processor.cores}</p>
              <p>Base Clock Speed: {processor.base}</p>
              <p>Turbo Clock Speed: {processor.turbo}</p>
              <p>Socket: {processor.socket}</p>
              <p>Process node: {processor.process}</p>
              <p>L3 Cache: {processor.cache}</p>
              <p>Power Consuption: {processor.tdp}</p>
              <p>Released in: {processor.released}</p>
              <p>Price: {processor.price}</p>
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

            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'selectedItem')} style={{height: "300px", padding: '10px' }}>
              <h3 className='text-success'>Your Parts</h3>
              {selectedItem && Object.entries(selectedItem).map(([key, value], index) => (
                <div className='text-light' key={index} style={{ padding: '5px', userSelect: "none", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', cursor: 'default' }}>
                  {key}: {value.CPU_name}
                  <button style={{ cursor: 'pointer', border: 'none', background: "none", color: "red"}} onClick={() => { removeItem(key) }}>
                  <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              ))}
              { Object.entries(selectedItem).length === 0 && <div className='text-info text-center' style={{marginTop: "140px"}}>Drag here to add components</div>}
            </div>

          </div>
        </div>

        <div onDragOver={(e) => onDragOver(e)} className='container d-flex flex-wrap gap-3'>
          {processors.map((processor) => { return <Card processor={processor} key={processor.CPU_name} showProcessor={showProcessor} /> })}
        </div>
      </div>


    </>
  )
}

export default Processors
