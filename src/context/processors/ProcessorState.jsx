import { useState } from "react"
import ProcessorContext from "./ProcessorContext";

const ProcessorState = (props) => {

  const [processors, setProcessors] = useState([
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 5 5600G",
      "Codename": "Cezanne",
      "Cores": "6  / 12",
      "Base_clock": "3.9 GHz",
      "Turbo_clock": "4.4 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "16 MB",
      "TDP": "65 W",
      "Released": "Apr 13th, 2021",
      "Price": "$260"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Core Ultra 9 285K",
      "Codename": "Arrow Lake-S",
      "Cores": "24",
      "Base_clock": "3.7 GHz",
      "Turbo_clock": "5.7 GHz",
      "Socket": "1851",
      "Process": "3 nm",
      "L3Cache": "36 MB",
      "TDP": "125 W",
      "Released": "Oct 24th, 2024",
      "Price": "$270"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 7 5700X3D",
      "Codename": "Vermeer",
      "Cores": "8  / 16",
      "Base_clock": "3.0 GHz",
      "Turbo_clock": "4.1 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "96 MB",
      "TDP": "105 W",
      "Released": "Jan 8th, 2024",
      "Price": "$280"
    },
    {
      "Image": "https://cdn.mos.cms.futurecdn.net/VGCcWL5iYNoceZNq5PBwfk.jpg",
      "CPU_name": "Ryzen 5 3600",
      "Codename": "Matisse",
      "Cores": "6  / 12",
      "Base_clock": "3.6 GHz",
      "Turbo_clock": "4.2 GHz",
      "Socket": "AM4",
      "Process": "7 nm",
      "L3Cache": "32 MB",
      "TDP": "65 W",
      "Released": "Jul 7th, 2019",
      "Price": "$290"
    }
  ])

  return (
    <ProcessorContext.Provider value={{ processors }}>
      { props.children };
    </ProcessorContext.Provider>
  )
}

export default ProcessorState;



