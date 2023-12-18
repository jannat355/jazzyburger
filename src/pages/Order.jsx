import React from 'react'
import trash from '../assets/Vector (7).svg'
import { Link } from 'react-router-dom'
const Order = () => {
  return (
    <main className='container d-lg-flex gap-5'>
      <section className='border w-50'>
        <div className='my-3 container '>
          <h4>Review and place Order</h4>
          <p>Review/Add address and fufill payments to complete your purchase</p>
          <hr />
          <h4>Recipient information</h4>
          <button className="btn btn-dark">Add Recipient</button>
          <hr />
          <h4>Delivery address</h4>
          <button className="btn btn-dark">Add Delivery address</button>
          <hr />
          <button className="btn btn-success w-100"> Place your order</button>
        </div>
      </section>

      <section className='border w-50 mb-5'>
        <div className='container'>
          <h4>Your order from</h4>
          <hr />
        <div className='d-flex justify-content-between'>
        <p className='text-danger '>Double Grilled chicken burger</p>
          <img src={trash} alt="" />
          <p> N12000</p>
          </div>
          <div class="quantity-container ">
    <div class="quantity-btn"   >-</div>
    <div class="quantity-btn" id="quantity">1</div>
    <div class="quantity-btn" >+</div>
  </div>
  <hr />
  <div className='list-unstyled d-flex justify-content-between'>
    <div>
    <li>Items total:</li>
    <li>Discount:</li>
    <li>Delivery charge:</li>
    </div>

   <div>
   <li>N12000</li>
    <li>0</li>
    <li>0.0</li>
   </div>
    
  </div>
  <hr />
  <div className='d-flex justify-content-between'>
    <h5>Total Price:</h5>
    <p>N12000</p>
  </div>
      
          
        </div>
      </section>
    </main>
  )
}

export default Order