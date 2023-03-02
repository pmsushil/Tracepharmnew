import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Products() {

  const [data, setData] = useState([])


  useEffect(()=>{
    getData();
   
  }, [])

  const getData = async () => {
    const result= await axios.get("https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd")
    .then (res =>setData(res.data))
  }
    
  return (
    
     
        data.map((item, i) => {
          return (
            <div className="row mt-3" key={i}>
              <div className="flex justify-content-between">
                <div className="flex justify-content-between">
                 
                  <div className="product-info flex-row">
                  <div>
                      <label>ID:</label>
                      <span>{item.id}</span>
                    </div>
                    {/* <div>
                      <label>Brand Name:</label>
                      <span>{item.description}</span>
                    </div> */}
                    <div>
                      <label>Generic Name:</label>
                      <span>{item.name} </span>
                    </div>
                    <div>
                      <label>Labeler Name:</label>
                      <span>{item.price} </span>
                    </div>
                    {/* <div>
                      <label>GTIN :</label>
                      <span>{item.product_gtin} </span>
                    </div>
                    <div>
                      <label>Product NDC:</label>{" "}
                      <span>{item.product_ndc}</span>
                    </div>
                    <div>
                      <label>Ingredients :</label>{" "}
                      <span>{item.Ingredients_name}</span>
                    </div> */}
                    {/* <div>
                      <label>Unit Price:</label>{" "}
                      <span> {item.price && item.price.toFixed(2)} USD</span>
                    </div>

                    <div>
                      <label>Dosage Form:</label> <span> {item.dosage_form}</span>
                    </div>
                    <div>
                      <label>Dosage Strength:</label> <span> {item.Ingredients_strength}</span>
                    </div>

                    <div>
                      <label>Description:</label>{" "}
                      <span> {item.product_description} </span>
                    </div> */}
                    
                    
                  </div>
                </div>
              </div>
              <hr className="row-divider"></hr>
            </div>
          );
        })
      ) 
    
  
}
