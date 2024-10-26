import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const GraphicsCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart } = listContext
  

    return (
        <>
            <div draggable={ !selectedItem.GPU ? "true": "false"} onDragStart={(e) => onDragStart(e, props.gpu, 'Graphics') } onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } className="card border-0 me-lg-4 mb-lg-0 mb-4" onClick={()=>{props.showGPU( props.gpu )}} style={{width: "18rem", opacity: selectedItem.GPU?'0.6':'1'}}>
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="" src={props.gpu.Image} draggable={false} alt="" />
                    <div className="date bg-success"> <span className="day">{props.gpu.Released.split(" ")[1]}</span>
                        <span className="month">{props.gpu.Released.split(" ")[0]}</span> <span className="year">{props.gpu.Released.split(" ")[2]}</span>
                    </div>
                </div>
                <div className="content"> <p className="h-1 mt-4">{props.gpu.GPU_name}</p>
                <p className="text-muted mt-3">Memory: </p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <div className="btn btn-primary">See Details<span className="fas fa-arrow-right"></span></div>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.gpu.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>3</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default GraphicsCard