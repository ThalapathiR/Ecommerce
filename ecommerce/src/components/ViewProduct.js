import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productQuantity } from './slice';
import Swal from "sweetalert2";
import './ViewProduct.css';
import './Navbar.css';
import { Navbar } from './Navbar';
import { addToCart, increseQuantity } from './slice';

export const ViewProduct = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [addedToCart, setAddedToCart] = useState(true);
  let data = location.state;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.viewData);  // Get cart from Redux store

  // Check if the product already exists in the cart
  const productInCart = cart.find(item => item.id === data.id);


  let handleAddCart = (data) => {
    if (productInCart) {
      // If the product already exists, increase the quantity
      dispatch(increseQuantity(data.id));
      Swal.fire({
        title: "Item quantity increased in the Cart",
        icon: "success",
      });
    } else {
      // If the product doesn't exist, add it to the cart
      dispatch(addToCart(data));
      Swal.fire({
        title: "Item Added To the Cart",
        icon: "success",
      });
    }
    setAddedToCart(false);
  };


  return (
    <div className='View_body'>
      <Navbar />
      <div className='view_Content'>
        <div className='view_img'>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='right_content'>
          <h2>{data.description}</h2>
          <hr />
          <p className='coupons'>
            Coupons for you
            <br />
            Partner OfferBuy this & get upto₹500 off on FurnitureKnow More
            Available offers
            <br />
            Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
            <br />
            Bank OfferFlat ₹1,200 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹15,000T&C
            <br />
            Bank OfferFlat ₹1,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure, Min. Txn Value: ₹15,000T&C
          </p>
          <div className='mrp'>
            <h3> Special price: <br /> <h2>${data.price}</h2> </h3>
          </div>
          {addedToCart ? (
            <button onClick={() => {handleAddCart(data);}}>Add to Cart</button>
          ) : (
            <button onClick={() => navigate('/cartitem')}>Go to Cart</button>
          )}
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
