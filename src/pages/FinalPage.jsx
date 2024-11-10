import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../context/list/ListContext';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'
import audiourl from '/assets/confetti.mp3'

const FinalPage = () => {
  const listContext = useContext(ListContext);
  const [items, setItems] = useState(listContext.selectedItem || {});
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize()

  var audio = new Audio(audiourl);
  useEffect(() => {audio.play();},[]);
  
  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 1500);
  }, []);

  // Function to extract the item details and calculate the total price
  const extractItemsData = () => {
    const components = Object.values(items); // Extract all component objects
    let totalPrice = 0;

    const itemRows = components.map((component, index) => {
      const { Case_name, GPU_name, Chipset,  PSU_name, CPU_name, RAM_name, SSD_name, Price, Image } = component;
      const name = Case_name || GPU_name || Chipset || PSU_name || CPU_name || RAM_name || SSD_name;
      const price = parseFloat(Price.replace(/[^\d.-]/g, '')) || 0;
      totalPrice += price;

      return (
        <tr key={index}>
          <td>{name}</td>
          <td>$ {price}</td>
          <td>
            <img src={Image} alt={name} style={{ width: '100px' }} />
          </td>
        </tr>
      );
    });

    return { itemRows, totalPrice };
  };

  const { itemRows, totalPrice } = extractItemsData();

  return (
    <>
      {showConfetti && <Confetti
        width={width}
        height={height}
        tweenDuration={1}
      />}
      <div
        className="d-flex justify-content-center paddingTB60"
        
      >
        {loading && (
          <div
            className="spinner-grow spinner-grow-lg text-success text-center"
            style={{ marginTop: '40vh', marginBottom: '40vh' }}
            role="status"
          ></div>
        )}

        {show && (
          <table border="1" className='table table-dark table-hover'> 
            <thead>
              <tr className='table-success h2 fw-bold'>
                <th className='text-success-emphasis'>Component</th>
                <th className='text-success-emphasis'>Price</th>
                <th className='text-success-emphasis'>Image</th>
              </tr>
            </thead>
            <tbody>
              {itemRows}
              <tr className='table-success'>
                <td colSpan="2" className='h2 fw-bold text-success' >Total Price</td>
                <td className='h2 fw-bold text-success'>{`$ ${totalPrice.toFixed(2)}`}</td> 
              </tr>
            </tbody>
          </table>
        )}
        
      </div>
    </>
  );
};

export default FinalPage;
