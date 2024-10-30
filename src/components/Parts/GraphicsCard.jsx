import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const GraphicsCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showGPU(props.gpu);
    };
    
    return (
        <>
            <div 
                draggable={ !selectedItem.GPU ? "true": "false"} 
                onDragStart={(e) => onDragStart(e, props.gpu, 'Graphics') } 
                onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } 
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.GPU && selectedItem.GPU._id === props.gpu._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{width: "18rem", opacity: selectedItem.GPU?'0.6':'1'}}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="img-thumbnail" src={props.gpu.Image} draggable={false} alt="" style={{objectFit: "contain"}}/>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.gpu.GPU_name}</p>
                    <p className="text-muted mt-3">Wattage: {props.gpu.TDP}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.GPU ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, GPU: props.gpu }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.gpu.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraphicsCard;