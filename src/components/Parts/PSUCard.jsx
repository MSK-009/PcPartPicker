import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'
import placeholder from '/placeholder.webp';

const PSUCard = (props) => {

    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext

    const handleCardClick = (e) => {
        props.showPSU(props.psu);
    };



    return (
        <>
            <div draggable={!selectedItem.PSU ? "true" : "false"}
                onDragStart={(e) => onDragStart(e, props.psu, 'Power')}
                onDragEnd={(e) => { e.currentTarget.classList.remove("dragging") }}
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.PSU && selectedItem.PSU._id === props.psu._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{ width: "18rem", opacity: selectedItem.PSU ? '0.6' : '1' }}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="img-thumbnail" src={props.psu.Image && props.psu.Image.startsWith('https') ? props.psu.Image : placeholder} draggable={false} alt="" style={{ objectFit: "contain" }} />
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.psu.PSU_name}</p>
                    <p className="text-muted mt-3">Cores: {props.psu.Wattage}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.PSU ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, PSU: props.psu }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.psu.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PSUCard
