import '../assets/css/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'
import { Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { detailProductCart, removeFromCart } from '../redux/actions/productAction'

export const Cart = () => {
    const history = useHistory()
    const detailCart = useSelector((state) => state.detailCart.detailCart)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        totalPrice()
    }, [])

    const totalPrice = () => {
        let amount = 0
        detailCart.map((item, i) => (
            amount = amount + (item.price * item.qty)
        ))
        console.log(amount)
        setTotal(amount)
    }

    const addQty = (id) => {
        let item = detailCart.find(item => item.id === id)
        item.qty++
        totalPrice()
    }

    const minusQty = (id) => {
        let item = detailCart.find(item => item.id === id)
        item.qty--
        totalPrice()
    }

    const deleteAll = () => {
        dispatch(detailProductCart([]))
        dispatch(removeFromCart())
        totalPrice()
    }

    // const deleteCart = (id) => {
    //     if(window.confirm("Are you sure to delete this item ?")){
    //         let index = detailCart.findIndex(function(o){
    //             return o.id === 'myid';
    //         })
    //         console.log(index)
    //     }
    //     console.log(id)
    // }

    const checkout = () => {
        history.push('/checkout')
    }

    if(!localStorage.getItem('loginUser')){
        return(
            <Redirect to="/login" />
        )
    }
    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            <div className="row">
                <div class="col-sm-12 col-md-8">
                    <div class="cart-head">
                        <h4 class="card-title-head">Shopping Cart</h4>
                        <h4 class="card-button-head" onClick={deleteAll}>Delete All <FontAwesomeIcon className="ms-2" icon={faTrashAlt} /> </h4>
                    </div>
                    {
                        detailCart.map((item, i) => (
                            <div class="cart-shop" key={i}>
                                <img src={item.image} alt={item.title} class="img-shop"/>
                                <div class="product-name">
                                    <a href="#!" class="title-shop">{item.title}</a>
                                    <div class="price-shop">
                                        <h6 class="final-price">$ {item.price}</h6>
                                    </div>
                                </div>
                                <div class="cart-other">
                                    <div class="note">
                                        <div class="input-group">
                                            <input type="text" class="form-control form-note" placeholder="Note (Optional)" />
                                        </div>
                                    </div>
                                    <div class="cart-qty">
                                        {/* <span class="button-delete" onClick={() => deleteCart(item.id)}>
                                            <FontAwesomeIcon className="ms-2" icon={faTrashAlt} />
                                        </span> */}
                                        <div class="number-cart">
                                            <span class="minus-cart me-2" onClick={() => minusQty(item.id)}>-</span>
                                            <input type="number" value={item.qty} class="input-jumlah" />
                                            {/* <input type="number" class="input-jumlah" /> */}
                                            <span class="plus-cart ms-2" onClick={() => addQty(item.id)}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card-order">
                        <div class="card-total-price">
                            <h5 class="text-order">Detail Order</h5>
                            <div class="cart-other">
                                <div class="note">
                                    <h4 class="text-total">Total Price</h4>
                                </div>
                                <div class="note">
                                    <h4 class="price-total">$ {total}</h4>
                                </div>
                            </div>
                            <button class="btn btn-order text-center" onClick={checkout}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}