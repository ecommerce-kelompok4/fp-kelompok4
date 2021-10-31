import { ListProduct } from "./ListProduct"

export const Product = () => {
    return(
        <div className="container-fluid" style={{marginTop: '6rem'}}>
            <div className="row">
                <div className="col-md-12">
                    <ListProduct />
                </div>
            </div>
        </div>
    )
}