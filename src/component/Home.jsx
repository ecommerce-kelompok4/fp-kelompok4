import { Footer } from "./Footer"
import { Navbar } from "./Nabvar"
import { Product } from "./Product"

export const Home = () => {
    return(
        <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}