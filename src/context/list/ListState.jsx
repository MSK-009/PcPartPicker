import { useState } from "react"
import ListContext from "./ListContext";

const ListState = (props) => {
  const [selectedItem, setSelectedItem] = useState({})

  const onDragStart = (e, item, listName) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
    e.dataTransfer.setData('listName', listName);
    e.currentTarget.classList.add("dragging");


    const dragImage = e.currentTarget.cloneNode(true);
    dragImage.style.position = "absolute";
    dragImage.style.opacity = "1"
    dragImage.style.pointerEvents = "none";
    dragImage.style.top = `${e.clientY - 20}px`; // Offset for visibility near the cursor
    dragImage.style.left = `${e.clientX - 20}px`

    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 150, 200)

    setTimeout(() => document.body.removeChild(dragImage), 0);


  };

  const onDragOver = (e) => {
    e.preventDefault(); // This is required to allow a drop
    e.currentTarget.classList.add("drag-over")
  };


  const onDrop = (e) => {
    const item = e.dataTransfer.getData('item');
    const sourceListName = e.dataTransfer.getData('listName');
    const data = JSON.parse(item)
    if (sourceListName === 'Processor') {
      setSelectedItem({ ...selectedItem, Processor: data });
    }
    else if (sourceListName === 'Graphics') {
      setSelectedItem({ ...selectedItem, GPU: data });
    }
    else if (sourceListName === 'RAM') {
      setSelectedItem({ ...selectedItem, RAM: data });
    }
    else if (sourceListName === 'Power') {
      setSelectedItem({ ...selectedItem, PSU: data });
    }
    e.currentTarget.classList.remove("drag-over")
  };

  const removeItem = (key) => {
    const { [key]: _, ...updatedSelected } = selectedItem;
    setSelectedItem(updatedSelected);
  }



  return (
    <ListContext.Provider value={{ selectedItem, setSelectedItem, onDragStart, onDragOver, onDrop, removeItem }}>
      {props.children};
    </ListContext.Provider>
  )
}

export default ListState;



