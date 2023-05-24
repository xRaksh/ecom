import { ProductContext } from "../Context/ProductContext"
import Products from "../Components/Products.jsx";

const AllProducts = () => {

    const { isLoading, products } = ProductContext();
    console.log(products)

    if (isLoading) {
        return <div>........loading</div>
    }


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {/* <Products /> */}
                        {products.map((cur) => {
                            return <Products key={cur.id} {...cur} />
                        })}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default AllProducts
