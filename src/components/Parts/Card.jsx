import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const Card = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart } = listContext
  

    return (
        <>
            <div draggable={ !selectedItem.Processor ? "true": "false"} onDragStart={(e) => onDragStart(e, props.processor, 'Processor')} className="card border-0 me-lg-4 mb-lg-0 mb-4" onClick={()=>{props.showProcessor(props.processor)}} style={{width: "18rem", opacity: selectedItem.Processor?'0.6':'1'}}>
                <div className="backgroundEffect"></div>
                <div className="pic">
                    <img className="" src={props.processor.Image} draggable={false} alt="" />
                    <div className="date bg-success"> <span className="day">{props.processor.Released.split(" ")[1]}</span>
                        <span className="month">{props.processor.Released.split(" ")[0]}</span> <span className="year">{props.processor.Released.split(" ")[2]}</span>
                    </div>
                </div>
                <div className="content"> <p className="h-1 mt-4">{props.processor.CPU_name}</p>
                    <p className="text-muted mt-3">Cores: {props.processor.Cores}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <div className="btn btn-primary">See Details<span className="fas fa-arrow-right"></span></div>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.processor.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>3</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card
