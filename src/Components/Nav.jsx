import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center app w-full" >
                <div className="w-full bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">Please Understand</p>
                    <p className="text-sm">There is no cart or single product type functionality because of my JSON API which I host in GitHub</p>
                </div>
                <nav className="container mx-auto px-5 flex justify-between py-4 bg-white shadow-md w-full ">
                    {/* <div className=""> */}
                        <a className="cursor-pointer">
                            <h3 className="">
                                <img className="h-10 object-cover glow"
                                    src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg" alt="Store Logo" />
                            </h3>
                        </a>
                    {/* </div> */}
                    <div className="items-center space-x-3 flex p-1.5 rounded-3xlS w-32 sm:w-56">
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="search" className="block bg-white w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search" required />
                                 {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>  */}
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center space-x-5">
                        <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 icons" href="https://www.linkedin.com/in/xraksh/">
                            <span><i className="fa-solid fa-arrow-right-to-bracket fill-current h-5 w-5 mr-2 mt-0.5"></i></span>
                            <span className='hidden sm:flex'>Login</span>
                        </a>

                        <NavLink to="/">
                            <button className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 icons" >
                                <span><i className="fa-solid fa-cart-shopping fill-current h-5  mr-2 mt-0.5"></i></span>
                            </button>
                        </NavLink>
                    </div>
                </nav>

            </div >
        </div>
    )
}

export default Nav
