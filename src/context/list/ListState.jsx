import { useEffect, useState } from "react"
import ListContext from "./ListContext";

const ListState = (props) => {
  const [ selectedItem, setSelectedItem ] = useState({})

  const onDragStart = (e, item, listName) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
    e.dataTransfer.setData('listName', listName);
  };

  const onDragOver = (e) => {
    e.preventDefault(); // This is required to allow a drop
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



