import '../assets/css/DetailProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productAction'

export const DetailProduct = () => {
    const product = useSelector((state) => state.product)
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
                            <span class="minus me-2">-</span>
                            <input type="text" value="1" class="input-jumlah" />
                            <span class="plus ms-2">+</span>
                        </div>
                        <button class="btn btn-beli mt-4"><FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
                    </div>
                </div>
            }
        </div>
    )
}