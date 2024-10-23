import { useState } from "react"
import GPUContext from "./GPUContext";

const GPUState = (props) => {

  const [gpus, setGPUs] = useState([
    {
      "Image": "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg",
      "GPU_name": "Gtx 960",
      "Codename": "Cezanne",
      "Process": "7 nm",
      "TDP": "65 W",
      "Released": "Apr 13th, 2021",
      "Price": "$260"
    },
    {
      "Image": "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg",
      "GPU_name": "Gtx 1660 super",
      "Codename": "Arrow Lake-S",
      "Process": "3 nm",
      "TDP": "125 W",
      "Released": "Oct 24th, 2024",
      "Price": "$270"
    },
    {
      "Image": "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg",
      "GPU_name": "Rx 5500XT",
      "Codename": "Vermeer",
      "Process": "7 nm",
      "TDP": "105 W",
      "Released": "Jan 8th, 2024",
      "Price": "$280"
    },
    {
      "Image": "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg",
      "GPU_name": "koi bekar card",
      "Codename": "Matisse",
      "Process": "7 nm",
      "TDP": "65 W",
      "Released": "Jul 7th, 2019",
      "Price": "$290"
    }
  ])

  return (
    <GPUContext.Provider value={{ gpus }}>
      { props.children };
    </GPUContext.Provider>
  )
}

export default GPUState;



