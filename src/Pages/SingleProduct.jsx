// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { ProductContext } from '../Context/ProductContext'

// // const API = "https://xraksh.github.io/testapi/ecom.json"
// const API = "https://fakestoreapi.com/products/"

// const SingleProduct = () => {
//   const {getSingleProduct,isSingleLoading,singleData} = ProductContext()
//     console.log(singleData)

//   const {id} = useParams();
//   console.log(id)
//   // const {
//   //   id:raksh,

//   // } = singleProduct

//   useEffect(() =>{
//     getSingleProduct(`${API}?id=${id}`)
//   },[])

//   return (
//     <>
//        <section className="text-gray-600 body-font">
//           <div className="container px-5 py-5 mx-auto">
//             <div className="min-w-screen   flex items-center p-5 lg:p-10 overflow-hidden relative">
//               <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
//                 <div className="md:flex items-center -mx-10">
//                   <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
//                     <div className="relative">
//                       <img src="" className="w-full h-96 relative z-10" alt="" />
//                       <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
//                     </div>
//                   </div>
//                   <div className="w-full md:w-1/2 px-10">
//                     <div className="mb-5">
//                       <h1 className="font-bold uppercase text-xl mb-5">item.category</h1>
//                     </div>
//                     <div className="mb-10">
//                       <h1 className="font-bold uppercase text-2xl mb-5">item.title</h1>
//                       <p className="text-sm">item.description</p>
//                     </div>
//                     <div>
//                       <div className="inline-block align-bottom mr-5">
//                         <span className="text-3xl font-bold leading-none align-baseline">₹</span>
//                         <span className="font-bold text-4xl leading-none align-baseline">item.price</span>
//                         {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
//                       </div>
//                       <div className="flex flex-col sm:flex-row gap-2 mt-2">
//                         <a href="/cart"><button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW</button></a>
//                         <a href="/cart"><button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2" /> Add to Cart</button></a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>
//     </>
//   )
// }

// export default SingleProduct
