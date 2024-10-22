import React, { useState } from 'react';


const Search = () => {
  const gpuData = [
    {
      "GPU_name": "ASRock Radeon RX 7700 XT Phantom Gaming 12GO",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 692.88"
    },
    {
      "GPU_name": "ASRock Radeon RX 7800 XT Challenger 16GO",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 754.24"
    },
    {
      "GPU_name": "ASUS Radeon RX 6700 XT TUF O12G",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 1058.98"
    },
    {
      "GPU_name": "Gigabyte GeForce RTX 3050 Eagle OC",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 441.53"
    },
    {
      "GPU_name": "Gigabyte GeForce RTX 3050 Gaming OC",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 407.99"
    },
    {
      "GPU_name": "Gigabyte GeForce RTX 3060 Gaming OC 12G LHR",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 409.99"
    },
    {
      "GPU_name": "Gigabyte GeForce RTX 3060 Ti Gaming OC 8G LHR",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 587.99"
    },
    {
      "GPU_name": "Gigabyte GeForce RTX 3060 Ti Gaming OC Pro 8G LHR",
      "VRAM": "N/A",
      "tdp": "N/A",
      "Price": "CDN$ 895.81"
    }
  ];

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (value) => {
    setInput(value);
    const filteredResults = gpuData.filter((GPU) => {
      return value && GPU && GPU.GPU_name && GPU.GPU_name.toLowerCase().includes(value.toLowerCase());
    });
    setResults(filteredResults);
  };

  const handleSelect = (gpu) => {
    setInput(gpu.GPU_name);
    setResults([]); // Clear results after selection
  };

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      
      {results.length > 0 && (
        <ul  className="list-group mt-2" style={{ position: 'absolute', zIndex: 1000,maxHeight: '200px', overflowY: 'auto'}}>
          {results.map((gpu, index) => (
            <li 
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(gpu)}
            >
              {gpu.GPU_name} - {gpu.Price}
            </li>
          ))}
        </ul>
      )}
      </div>
    
  );
};

export default Search;
