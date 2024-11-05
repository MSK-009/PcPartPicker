import React, { useContext, useEffect } from 'react'
import ListContext from '../../context/list/ListContext'
import placeholder from '/placeholder.webp';

const CaseCard = (props) => {

    useEffect(() => {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }, []);

    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showCase(props.case);
    };

    return (
        <>
            <div
                draggable={!selectedItem.Case ? "true" : "false"}
                onDragStart={(e) => onDragStart(e, props.case, 'Case')}
                onDragEnd={(e) => { e.currentTarget.classList.remove("dragging") }}
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${selectedItem.Case && selectedItem.Case._id === props.case._id ? "bg-secondary bg-gradient" : ""}`}
                onClick={handleCardClick}
                style={{ width: "18rem", opacity: selectedItem.Case ? '0.6' : '1' }}
            >
                <div className="backgroundEffect"></div>
                <div className="pic">
                
                    <img className="img-thumbnail" src={props.case.Image && props.case.Image.startsWith('https') ? props.case.Image : placeholder} draggable={false} alt="" style={{objectFit: "contain"}}/>

                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.case.Case_name}</p>
                    <p className="text-muted mt-3">Size: {props.case.Size}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.Case ? true : false} className="btn btn-primary custom-popover"
                            onClick={() => { setSelectedItem({ ...selectedItem, Case: props.case }) }}
                            data-bs-toggle="popover"
                            data-bs-placement="bottom"
                            data-bs-content={!selectedItem.Case?"Add to your items":"Already a case selected"}
                            data-bs-trigger="hover focus">
                            Add
                            <span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">{props.case.Price}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseCard;