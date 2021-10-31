import '../assets/css/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {
    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            <div className="row">
                <div class="col-sm-12 col-md-8">
                    <div class="cart-head">
                        <h4 class="card-title-head">Shopping Cart</h4>
                        <h4 class="card-button-head">Delete All <FontAwesomeIcon className="ms-2" icon={faTrashAlt} /> </h4>
                    </div>
                    <div class="cart-shop">
                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" class="img-shop"/>
                        <div class="product-name">
                            <a href="#!" class="title-shop">Mens Casual Premium Slim Fit T-Shirts</a>
                            <div class="price-shop">
                                <h6 class="final-price">$ 22.3</h6>
                            </div>
                        </div>
                        <div class="cart-other">
                            <div class="note">
                                <div class="input-group">
                                    <input type="text" class="form-control form-note" placeholder="Note (Optional)" />
                                </div>
                            </div>
                            <div class="cart-qty">
                                <span class="button-delete">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <div class="number-cart">
                                    <span class="minus-cart me-2">-</span>
                                    <input type="number" value="1" class="input-jumlah" />
                                    <span class="plus-cart ms-2">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-shop">
                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" class="img-shop"/>
                        <div class="product-name">
                            <a href="#!" class="title-shop">Mens Casual Premium Slim Fit T-Shirts</a>
                            <div class="price-shop">
                                <h6 class="final-price">$ 22.3</h6>
                            </div>
                        </div>
                        <div class="cart-other">
                            <div class="note">
                                <div class="input-group">
                                    <input type="text" class="form-control form-note" placeholder="Note (Optional)" />
                                </div>
                            </div>
                            <div class="cart-qty">
                                <span class="button-delete">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <div class="number-cart">
                                    <span class="minus-cart me-2">-</span>
                                    <input type="number" value="1" class="input-jumlah" />
                                    <span class="plus-cart ms-2">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <h4 class="price-total">$ 22.3</h4>
                                </div>
                            </div>
                            <button class="btn btn-order text-center">
                                Buy (<span id="total-beli"></span>)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}