import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className='payment'>
        <div className='payment__container'>
          <h1>
           Checkout (
             <Link to="/chekout"> {basket?.lenght} items</Link>    {/* NoT WORLING */}
             )
          </h1>


         {/* payment section - delivery adredd */}
         <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery Adress</h3>
            </div>
            <div className='payment__address'>
              <p>{user?.email}</p>
              <p>First line of address </p>
              <p>Second line of address</p>
            </div>
         </div>

         {/* payment section - review adress*/}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
              {basket.map(item => (
                <CheckoutProduct            
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
              ))}
            </div>
         </div>

         {/* payment section - review payment method*/}
          <div className='payment__section'>
                   <div className='payment__title'>
              <h3>Payment Method</h3>
              {/* stripe magic */}
            </div>
           
         </div>


        </div>
    </div>
  )
}

export default Payment
