import '../assets/css/ListProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen  } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown  } from '@fortawesome/free-regular-svg-icons'

export const ListProduct = () => {
    return(
        <div className="row">
            <div className="col-lg-3 col-md-12">
                <h5 className="text-filter">Filter</h5>
                <ul className="list-group mt-3">
                    <li className="list-group-item fw-bold">
                        <span data-bs-toggle="collapse" data-bs-target="#collapseCategory"  style={{cursor: 'pointer'}}>Category <FontAwesomeIcon className="ms-2" icon={faArrowAltCircleDown} /></span>
                        <div className="list-group collapse pt-2" id="collapseCategory">
                            <span className="ps-2 py-2 list-filter">All Categories</span>
                            <span className="ps-2 py-2 list-filter">Electronics</span>
                            <span className="ps-2 py-2 list-filter">Jewelery</span>
                            <span className="ps-2 py-2 list-filter">Men's Clothing</span>
                            <span className="ps-2 py-2 list-filter">Women's Clothing</span>
                        </div>
                    </li>
                    <li className="list-group-item fw-bold">
                        <span data-bs-toggle="collapse" data-bs-target="#collapseSorting"  style={{cursor: 'pointer'}}>Sorting <FontAwesomeIcon className="ms-2" icon={faArrowAltCircleDown} /></span>
                        <div className="list-group collapse pt-2" id="collapseSorting">
                        <select className="form-select">
                            <option selected value="1">Latest</option>
                            <option value="1">Highest Price</option>
                            <option value="2">Lower Price</option>
                        </select>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row">
                    <div className="mt-4 col-md-3 mb-2 d-flex">
                        <div className="card primary" style={{width: 'auto', height: 'auto'}}>
                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="card-img-top p-4" alt="..."/>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title mt-auto fw-bold mb-3">Mens Casual Premium Slim Fit T-Shirts</h6>
                                <h4 className="card-price">$ 22.3</h4>
                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div className="rating-product mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 28 28" width="24px" fill="#F2B705"><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"></path></g></svg>
                                        4.5
                                    </div>
                                    <a href="#!" className="btn btn-sm btn-buy mt-2"><FontAwesomeIcon icon={faBoxOpen} /> Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-md-3 mb-2 d-flex">
                        <div className="card primary" style={{width: 'auto', height: 'auto'}}>
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top p-4" alt="..."/>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title mt-auto fw-bold mb-3">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h6>
                                <h4 className="card-price">$ 109.95</h4>
                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div className="rating-product mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 28 28" width="24px" fill="#F2B705"><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"></path></g></svg>
                                        4.5
                                    </div>
                                    <a href="#!" className="btn btn-sm btn-buy mt-2"><FontAwesomeIcon icon={faBoxOpen} /> Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}