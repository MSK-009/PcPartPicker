import React, { useContext } from "react";
import ListContext from "../../context/list/ListContext";
import placeholder from "/placeholder.webp";

const ProcessorCard = (props) => {
  const listContext = useContext(ListContext);
  const { selectedItem, onDragStart, setSelectedItem } = listContext;

  const handleCardClick = (e) => {
    props.showProcessor(props.processor);
  };

  // Function to safely handle the 'Released' date
  const getReleasedDate = (released) => {
    if (released && typeof released === "string" && released.includes(" ")) {
      const [month, year] = released.split(" ");
      return { month: month.slice(0, 3), year }; 
    }
    return { month: "Unknown", year: "Unknown" }; 
  };

  // Extracting date information safely
  const { month, year } = getReleasedDate(props.processor.Released);

  return (
    <div
      draggable={!selectedItem.Processor ? "true" : "false"}
      onDragStart={(e) => onDragStart(e, props.processor, "Processor")}
      onDragEnd={(e) => {
        e.currentTarget.classList.remove("dragging");
      }}
      className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${
        selectedItem.Processor && selectedItem.Processor._id === props.processor._id
          ? "bg-secondary bg-gradient"
          : ""
      }`}
      onClick={handleCardClick}
      style={{
        width: "18rem",
        opacity: selectedItem.Processor ? "0.6" : "1",
      }}
    >
      <div className="backgroundEffect"></div>

      <div className="pic">
        <img
          className="img-thumbnail"
          src={
            props.processor.Image && props.processor.Image.startsWith("https")
              ? props.processor.Image
              : placeholder
          }
          draggable={false}
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div className="date bg-success text-white p-2 rounded mb-3">
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </div>

      <div
        className="content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="h-1 mt-4">{props.processor.CPU_name}</p>
        <span className="text-muted mt-3">Cores: {props.processor.Cores} , </span>
        <span className="text-muted">Threads: {props.processor.Threads}</span>
        




        <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
          <button
            disabled={selectedItem.Processor ? true : false}
            className="btn btn-primary"
            onClick={() => {
              setSelectedItem({
                ...selectedItem,
                Processor: props.processor,
              });
            }}
          >
            Add<span className="fas fa-arrow-right"></span>
          </button>
          <div className="d-flex align-items-center justify-content-center foot">
            <p className="price">{props.processor.Price}</p>
            <p className="ps-3 icon text-muted">
              <span className="fas fa-comment-alt pe-1"></span>7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessorCard;
