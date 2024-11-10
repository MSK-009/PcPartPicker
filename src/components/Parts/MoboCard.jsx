import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'
import placeholder from '/placeholder.webp';

const MoboCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showMOBO(props.mobo);
    };
    
    return (
        <>
            <div 
                draggable={ !selectedItem.Motherboard ? "true": "false"} 
                onDragStart={(e) => onDragStart(e, props.mobo, 'Motherboard') } 
                onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } 
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.Motherboard && selectedItem.Motherboard._id === props.mobo._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{width: "18rem", opacity: selectedItem.Motherboard?'0.6':'1'}}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                <img className="img-thumbnail" src={props.mobo.Image && props.mobo.Image.startsWith('https') ? props.mobo.Image : placeholder} draggable={false} alt="" style={{objectFit: "contain"}}/>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.mobo.Chipset}</p>
                    <p className="text-muted mt-3">Socket: {props.mobo.Socket}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.Motherboard ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, Motherboard: props.mobo }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">CDN$ {props.mobo.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoboCard;