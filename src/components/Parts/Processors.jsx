import React, { useState, useRef, useContext } from 'react'
import Card from './ProcessorsCard'
import ListContext from '../../context/list/ListContext'
import ProcessorContext from '../../context/processors/ProcessorContext'
import List from '../List'
import Search from '../Search';

const Processors = () => {


  const processorContext = useContext(ProcessorContext)

  const { processors } = processorContext

  const listContext = useContext(ListContext)
  const { onDragOver, onDrop } = listContext

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
            <img draggable={false} src={processor.image} className='img-fluid'></img>
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

      <div className="d-flex flex-column flex-sm-row my-5">
        <div className="col-">
          <button
            className="btn btn-success w-100 h-0 mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Filter
          </button>

          <div>
            <div className="collapse" id="collapseExample">
              <div>
                <Search />
              </div>
            </div>
          </div>

          <div
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 'selectedItem')}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove('drag-over');
            }}
            className="drop-area d-none d-sm-block"
          >
            <List />
          </div>
        </div>

        <div className="container d-flex flex-wrap gap-3 align-items-center justify-content-center">
          {processors.map((processor) => (
            <Card processor={processor} key={processor.CPU_name} showProcessor={showProcessor} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Processors
