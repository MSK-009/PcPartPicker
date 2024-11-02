import React, { useState, useRef, useContext, useEffect } from 'react'
import RAMCard from './RAMCard'
import ListContext from '../../context/list/ListContext'
import RAMContext from '../../context/ram/RAMContext'
import List from '../List'
import Search from '../Search';
import LoadingBar from 'react-top-loading-bar'
import BackToTop from '../BackToTop'

const RAM = () => {


  const ramContext = useContext(RAMContext)

  const { rams, getRAMs, totalResults } = ramContext
  
  const listContext = useContext(ListContext)
  const { selectedItem, onDragOver, onDrop, setSelectedItem } = listContext

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [pageSize, setPageSize] = useState(12)
  const [sort, setSort] = useState({})
  const [progress, setProgress] = useState(0)

  var nosPages = Math.ceil(totalResults / pageSize)

  const [ram, setRAM] = useState({
    image: "",
    RAM_name:"",
    Latency: "",
    MC: "",
    SC: "",
    Released: "",
    Price: "",
  })
  

  useEffect(() => {
    setProgress(25)
    getRAMs(pageSize, page, searchTerm, sort)
    setProgress(100)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [page, pageSize, searchTerm, sort])

  const ref = useRef(null)
  const refClose = useRef(null)

  const showRAM = (currentRAM) => {
    ref.current.click()
    setRAM({
      image: currentRAM.Image,
      RAM_name: currentRAM.RAM_name,
      Latency: currentRAM.Latency,
      MC: currentRAM.Multicore_RW,
      SC: currentRAM.Singlecore_RW,
      Released: currentRAM.Released,
      Price: currentRAM.Price,
    })
  }
  

  const handleRemoveItem = ()=>{
    const { ["RAM"]: _, ...updatedSelected } = selectedItem;
    setSelectedItem(updatedSelected);
  }


  return (
    <>
      <BackToTop/>
      <LoadingBar color='rgb(73, 180, 69)' progress={progress} onLoaderFinished={() => setProgress(0)} />
      
      {/* Modal for showing info */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{ram.RAM_name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img draggable={false} src={ram.image} className='img-fluid'></img>
            <div className="modal-body">
              <p>Latency: {ram.Latency}</p>
              <p>Avg Multicore RW: {ram.MC}</p>
              <p>Avg SingleCore RW: {ram.SC}</p>
              <p>Released: {ram.Released}</p>
              <p>Price: CDN {ram.Price}</p>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button 
                type="button" 
                disabled={ selectedItem.RAM && selectedItem.RAM.RAM_name === ram.RAM_name ? false : true }
                onClick={handleRemoveItem}
                className="btn btn-danger">
                  Remove from your parts
                </button>
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
                        <li><button className="dropdown-item" onClick={() => { setSort({ parameter: "Price", order: "asc" }) }}>Price: Ascending</button></li>
                        <li><button className="dropdown-item" onClick={() => { setSort({ parameter: "Price", order: "desc" }) }}>Price: Descending</button></li>
                        <li><hr className="dropdown-divider text-primary" /></li>
                        <li><button className="dropdown-item" onClick={() => { setSort({ parameter: "RAM_name", order: "asc" }) }}>Alphabetical: A-Z (Default)</button></li>
                        <li><button className="dropdown-item" onClick={() => { setSort({ parameter: "RAM_name", order: "desc" }) }}>Alphabetical: Z-A</button></li>
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
                <Search search={searchTerm} setSearchTerm={setSearchTerm} name="RAM_Search" setPage={setPage} />
              </div>
            </div>
          </div>

          <div
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 'selectedItem')}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove('drag-over');
            }}
            className="drop-area d-none d-sm-block sticky-top"
            style={{ top: "25%" }}
          >
            <List />
          </div>
        </div>
        <div className='container d-flex flex-wrap gap-3 align-items-center justify-content-center'>
        {rams.map((ram) => (
            <RAMCard ram={ram} key={ram._id} showRAM={showRAM} />
        ))}
        </div>
      </div>

      <div aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
              <li className="page-item">
                  <button className={`page-link ${page === 1 ? "disabled" : ""}`} aria-label="Previous" onClick={() => { setPage(page - 1) }}>
                      <span aria-hidden="true">&laquo;</span>
                  </button>
                
              </li>
              {Array.from({ length: nosPages }, (_, i) => (
                  <li key={i + 1} className={`page-item ${page === i + 1 ? "active" : ""}`}>
                      <button className="page-link" onClick={() => setPage(i + 1)}>
                          {i + 1}
                      </button>
                  </li>
              ))}

              <li className="page-item">
                  <button className={`page-link ${page === nosPages ? "disabled" : ""}`} aria-label="Next" onClick={() => { setPage(page + 1) }}>
                      <span aria-hidden="true">&raquo;</span>
                  </button>
              </li>
          </ul>
      </div>
    </>
  )
}

export default RAM;
