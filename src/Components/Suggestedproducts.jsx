import { ProductContext } from "../Context/ProductContext"
import Featureproducts from "./Featureproducts";


const Suggestedproducts = () => {

    const { isLoading, Suggested } = ProductContext();
    // console.log(Suggested)

    if (isLoading) {
        return <div>........loading</div>
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="sm:px-10">
                        <h2 className='text-3xl font-semibold'>Suggested</h2>
                    </div>
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Suggested.map((cur) => {
                            return <Featureproducts key={cur.id} {...cur} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Suggestedproducts
