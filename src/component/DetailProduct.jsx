import '../assets/css/DetailProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'

export const DetailProduct = () => {
    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="123" className="img-fluid p-5"/>
                </div>
                <div className="col-md-8">
                    <h2 className="fw-bold">Mens Casual Premium Slim Fit T-Shirts</h2>
                    <div>
                        <span className="fw-bold me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 28 28" width="24px" fill="#F2B705"><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"></path></g></svg>
                            4.1
                        </span>
                        <span>
                            (259)
                        </span>
                    </div>
                    <div className="box-price mt-4">
                        <h4 className="detail-price">$ 22.3</h4>
                    </div>
                    <div className="box-description fw-bold mt-3" style={{fontSize: '1.15rem'}}>
                        Description : 
                        <p className="detail-description">
                        Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", category: "men's clothing
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
        </div>
    )
}