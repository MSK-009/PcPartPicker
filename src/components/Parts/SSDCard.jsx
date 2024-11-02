import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const SSDCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showSSD(props.ssd);
    };
    
    
    return (
        <>
            <div 
                draggable={ !selectedItem.SSD ? "true": "false"} 
                onDragStart={(e) => onDragStart(e, props.ssd, 'SSD') } 
                onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } 
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.SSD && selectedItem.SSD._id === props.ssd._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{width: "18rem", opacity: selectedItem.SSD?'0.6':'1'}}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="img-thumbnail" src={props.ssd.Image} draggable={false} alt="" style={{objectFit: "contain"}}/>
                    <div className="date bg-success"> <span className="day">{props.ssd.Released.split(" ")[0]}</span>
                        <span className="month">{props.ssd.Released.split(" ")[1]}</span> <span className="year">{props.ssd.Released.split(" ")[2]}</span>
                    </div>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.ssd.SSD_name}</p>
                    <p className="text-muted mt-3">Capacity: {props.ssd.Capacity}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.SSD ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, SSD: props.ssd }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.ssd.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SSDCard;