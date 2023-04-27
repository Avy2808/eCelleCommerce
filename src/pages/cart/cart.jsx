import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '../../redux/action'
import "./cart.css";

const cart = () => {
  const state = useSelector(state => state.cart)
  
  const dispatchEvent = useDispatch()

  const deleteProduct = (product) => {
    dispatchEvent(delCart(product))
  }

  return (
    <div className='cart'>
      <div className="cart-container">
      {state.map((item) => {
        return(
          <div className='item'>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className='vb'>
              <button onClick={() => deleteProduct(item)}>Delete Item</button>
              <h3 className='v'>{item.qty}</h3>
            </div>
          </div>
        )
      })
    }
      </div>
      <button value="Place order">Place Order</button>
    </div>
  )
}

export default cart

      
