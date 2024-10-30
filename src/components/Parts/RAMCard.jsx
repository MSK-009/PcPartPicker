import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const RAMCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showRAM(props.ram);
    };
    
    
    return (
        <>
            <div 
                draggable={ !selectedItem.RAM ? "true": "false"} 
                onDragStart={(e) => onDragStart(e, props.ram, 'RAM') } 
                onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } 
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.RAM && selectedItem.RAM._id === props.ram._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{width: "18rem", opacity: selectedItem.RAM?'0.6':'1'}}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="img-thumbnail" src={props.ram.Image} draggable={false} alt="" style={{objectFit: "contain"}}/>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.ram.RAM_name}</p>
                    <p className="text-muted mt-3">Latency: {props.ram.Latency}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.RAM ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, RAM: props.ram }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.ram.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RAMCard;