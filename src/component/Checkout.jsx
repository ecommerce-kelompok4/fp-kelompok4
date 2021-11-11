import '../assets/css/Checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { setCheckoutProduct, detailProductCart, removeFromCart } from '../redux/actions/productAction'

export const Checkout = () => {
    const history = useHistory()
    const detailCart = useSelector((state) => state.detailCart.detailCart)
    const [total, setTotal] = useState(0)
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telp, setTelp] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(detailCart)
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

    const handleAdress = (e) => {
        setAddress(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleTelp = (e) => {
        setTelp(e.target.value)
    }

    const checkout = () => {
        if(!address == '' && !name == '' && !email == '' && !telp == 0){
            let localArray = []
            let objCheckout = {
                timestamp: new Date(),
                address: address,
                name: name,
                email: email,
                telp: telp,
                products: [detailCart]
            }

            if(!localStorage.getItem('checkout')){
                localArray.push(objCheckout)
                localStorage.setItem("checkout", JSON.stringify(localArray));
            }else{
                let storedCheckout = JSON.parse(localStorage.getItem("checkout"))
                storedCheckout.push(objCheckout)
                localStorage.setItem("checkout", JSON.stringify(storedCheckout));
            }
            
            

            dispatch(setCheckoutProduct(objCheckout))

            setTimeout(() => {
                alert("Checkout Completed!!")
                dispatch(detailProductCart([]))
                dispatch(removeFromCart())
                history.push('/')
            }, 2000)
            
            console.log(objCheckout)
        }else{
            alert("Please Fill in this form!!")
        }
    }

    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <div className="card-form-order">
                        <div className="card-form-head">
                            <h3 className="title-form">Detail Transaksi</h3>
                        </div>
                        <div className="form-order">
                            {
                                detailCart.map((item, i) => (
                                    <div className="card-list-order">
                                        <img src={item.image} alt={item.title} className="img-list-order" />
                                        <h4 className="name-list-order">{item.title}</h4>
                                        <div className="list-order">
                                            <div>
                                                
                                            </div>
                                            <div className="space-price">
                                                <div className="price-list-order">$ {item.price} x {item.qty}</div>
                                                <div className="final-price-list-order">$ {item.price * item.qty}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="card-form-order">
                        <div className="card-form-head">
                            <h3 className="title-form">Form Order</h3>
                        </div>
                        <div className="form-order">
                            <form>
                                <div className="form-row">
                                    <div className="col-md-6 my-2">
                                        <div className="form-label-group">
                                            <label htmlhtmlFor="inputAlamat">Adress :</label>
                                            <input type="text" id="inputAlamat" onChange={handleAdress} className="form-control" required/>
                                            <small className="form-text text-muted">
                                                Ex : Jalan 23, Bandung ...
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2">
                                        <div className="form-label-group">
                                            <label htmlFor="inputNama">Nama Penerima</label>
                                            <input type="text" id="inputNama" onChange={handleName} className="form-control" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 my-2">
                                        <div className="form-label-group">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input type="email" id="inputEmail" onChange={handleEmail} className="form-control" required/>
                                            <small className="form-text text-muted">
                                                Contoh : jhon@gmail.com
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2">
                                        <div className="form-label-group">
                                            <label htmlFor="inputNoHp">No Telepon</label>
                                            <input type="text" id="inputNoHp" onChange={handleTelp} className="form-control" required/>
                                            <small className="form-text text-muted">
                                                Contoh : 08xxxxxxxxxx
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="card-form-order">
                        <div className="card-form-head">
                            <h3 className="title-form">Ringkasan Order</h3>
                        </div>
                        <div className="card-total-price">
                            <div className="cart-other">
                                <div className="note">
                                    <h4 className="text-total font-weight-bold">Total Tagihan</h4>
                                </div>
                                <div className="note">
                                    <h4 className="price-detail-order">$ {total}</h4>
                                </div>
                            </div>
                            <button className="btn btn-order text-center" onClick={checkout}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}