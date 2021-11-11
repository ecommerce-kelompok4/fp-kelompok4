import '../assets/css/DetailProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct, addToCart, detailProductCart } from '../redux/actions/productAction'

export const DetailProduct = () => {
    const history = useHistory()
    const [qty, setQty] = useState(1)
    const product = useSelector((state) => state.product)
    const cartproducts = useSelector((state) => state.cartProducts.cartProducts)
    // const detailCart = useSelector((state) => state.detailCart.detailCart)
    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if(productId && productId !== ""){
            loadProductDetail(productId)
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    const loadProductDetail = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> {
            dispatch(selectedProduct(json))
        })
    }

    const addQty = () => {
        setQty(qty+1)
    }

    const subtractQty = () => {
        qty <= 1 ? alert("Jumlah minimal 1") : setQty(qty-1)
    }

    const addProductToCart = () => {
        if(!localStorage.getItem('loginUser')){
            alert("Login Terlebih Dahulu!!")
            history.push('/login')
        }else{
            fetch('https://fakestoreapi.com/carts',{
                method:"POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(
                    {
                        userId:4,
                        date:"2020-02-03",
                        products:[{productId:productId,quantity:qty}]
                    }
                )
            })
            .then(res=>res.json())
            .then(json=> {
                dispatch(addToCart(json.products))
                loadProductCart()
                alert("Produk Berhasil Ditambahkan!")
            })
        }
    }

    const loadProductCart = () => {
        let temp = []
        cartproducts.map((item, i) => {
            fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then(res=>res.json())
            .then(json=> {
                json["qty"] = item.quantity
                temp.push(json)
                dispatch(detailProductCart(temp))
            })
        })
    }

    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            {
                Object.keys(product).length === 0 ?
                <div style={{height: '100vh'}}>
                    <div class="text-center">
                        <div class="spinner-border mt-5" id="spin" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> :
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} className="img-fluid p-5"/>
                    </div>
                    <div className="col-md-8">
                        <h2 className="fw-bold">{product.title}</h2>
                        <div className="box-price mt-4">
                            <h4 className="detail-price">$ <span>{product.price}</span></h4>
                        </div>
                        <div className="box-description fw-bold mt-3" style={{fontSize: '1.15rem'}}>
                            Description : 
                            <p className="detail-description">
                                {product.description}
                            </p>
                        </div>
                        <div class="number">
                            <button class="minus me-2" onClick={subtractQty}>-</button>
                            <input type="text" value={qty} class="input-jumlah" disabled/>
                            <button class="plus ms-2" onClick={addQty}>+</button>
                        </div>
                        <button class="btn btn-beli mt-4" onClick={addProductToCart}><FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
                    </div>
                </div>
            }
        </div>
    )
}