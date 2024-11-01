import React from 'react'
import LeftBar from '../../Components/LeftBar';
import RightBar from '../../Components/RightBar';
import Heading from '../../Components/Heading';
import { useEffect } from 'react';
import { useState } from 'react';

const Rates = () => {
    const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
        method: 'GET',
        headers: {
          "x-access-token": "goldapi-122zjgchsm2u7dmqr-io",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      setGoldPrice(result);
      console.log(result)
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
  }, []);
    return (
        <div className="flex w-full min-h-screen">
          <LeftBar />
          <RightBar>
            {/* {state.isLoading ? <Loader /> : null} */}
            <div className="table-container overflow-x-scroll w-[100%] p-2">
              <Heading title="Category List" />
             
              <p>Price per gram (24k): {goldPrice?.price_gram_24k} INR</p>
          {/* <p>Price per gram (22k): {goldPrice.price_gram_22k} INR</p>
          <p>Price per gram (21k): {goldPrice.price_gram_21k} INR</p>
          <p>Price per gram (20k): {goldPrice.price_gram_20k} INR</p>
          <p>Price per gram (18k): {goldPrice.price_gram_18k} INR</p> */}
            </div>
          </RightBar>
        </div>
      );
}

export default Rates