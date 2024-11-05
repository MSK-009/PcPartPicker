import React, { useEffect } from 'react'


const Motherboard = () => {

useEffect(() => {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }, []);


    return (
        <button type="button" className="btn btn-primary"
        tabIndex="0"
            data-bs-toggle="popover"
            data-bs-placement="right"
            data-bs-content="Dont click"
            data-bs-trigger="hover focus">
            Hover to see Popover
        </button>
    )
}

export default Motherboard
