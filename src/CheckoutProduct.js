import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); 

  const RemoveFromBasket = () => {
      //Remove the item from the basket
       dispatch ({      // to manipulate the basket, use the  dispatch. 
         type: 'REMOVE_FROM_BASKET',   //we manipulate it in the reducer
         id: id,
       })
  }

    return (
      <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{title}
             
                <small>£</small>
                <strong>{price}</strong>
              </p>
            
              <div className="checkoutProduct__rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
            </div>
            <button onClick={RemoveFromBasket}>Remove from Basket</button>
          </div>
      </div>
    )
  }

export default CheckoutProduct
