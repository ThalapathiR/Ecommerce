import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cartitem.css'
import { increseQuantity, removeFromCart,decreaseQuantity } from './slice';
import { Navbar } from './Navbar';
export const CartItems = () => {
    // Access the cart from the Redux store
    let dispatch=useDispatch()
    const cart = useSelector((state) => state.viewData); 
    console.log(cart)

    let cartPrice=cart.reduce((a,b)=>a+b.price,0)
    console.log(cartPrice)
    // let [addItem,setAddItem]=useState()
    let [price,setPrice]=useState(cart.price)
    console.log(price)

    console.log(cart);
    let RemoveCart=(index)=>
    {
dispatch(removeFromCart(index))
    }
// Calculate the total price based on item quantity
const TotaLCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
      <div>
        <Navbar/>
<div className='cart_content'>

<div className='cartItem' >
{  cart.map((item, index) => (
          <div  className="cart_data"  key={index}>
       <div className='cart_row'>      <img src={item.image} />
       
       <div className='cart_con' > <h3>{item.title}</h3>                 
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p></div>
       </div>

       {/* ----------- */}
             <div className='cart_contetn'>
         
             <div className='cart_but'> 
              <button onClick={() => dispatch(decreaseQuantity(item.id))} >-</button>
             <p>{item.quantity}</p>
              <button onClick={() => dispatch(increseQuantity(item.id))} >+</button></div>

           <div>   <button className='remv_button' onClick={()=>RemoveCart(index)} >REMOVE</button></div>
             </div>
           
          </div>
          
          
      ))
  }
    <h1 className='totot' >Total:{TotaLCartPrice}</h1>
</div>
<div className='red'>

  <div><h1>Price Details</h1>
  <hr></hr>
  <h4>Price<p></p> </h4>
  <h4>Discount</h4>
  <h4>Delivery Charges</h4>
  <h4>Secured Packaging Fee</h4>
  <hr></hr>
  <h2>Total amount {TotaLCartPrice}</h2>
  </div>
</div>

{/* <h2>{addItem}</h2> */}
<div>
  
</div>

</div>
      </div>
        
    );
};



