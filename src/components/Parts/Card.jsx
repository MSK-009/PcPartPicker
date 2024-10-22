import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'

const Card = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart } = listContext
  

    return (
        <>
            <div draggable={ !selectedItem.Processor ? "true": "false"} onDragStart={(e) => onDragStart(e, props.processor, 'Processor')} class="card border-0 me-lg-4 mb-lg-0 mb-4" onClick={()=>{props.showProcessor(props.processor)}} style={{width: "18rem", opacity: selectedItem.Processor?'0.6':'1'}}>
                <div class="backgroundEffect"></div>
                <div class="pic">
                    <img class="" src={props.processor.Image} draggable={false} alt="" />
                    <div class="date bg-success"> <span class="day">{props.processor.Released.split(" ")[1]}</span>
                        <span class="month">{props.processor.Released.split(" ")[0]}</span> <span class="year">{props.processor.Released.split(" ")[2]}</span>
                    </div>
                </div>
                <div class="content"> <p class="h-1 mt-4">{props.processor.CPU_name}</p>
                    <p class="text-muted mt-3">Cores: {props.processor.Cores}</p>
                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <div class="btn btn-primary">See Details<span class="fas fa-arrow-right"></span></div>
                        <div class="d-flex align-items-center justify-content-center foot"> <p class="price">{props.processor.Price}</p>
                            <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card
