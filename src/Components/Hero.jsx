import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col gap-2 items-center">
                    <div className="lg:flex-grow w-full  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Shop the World
                            <br className="hidden lg:inline-block" />at Your Fingertips!
                        </h1>
                        <p className="mb-8 sm:w-4/5 leading-relaxed">At our ecommerce store, we're dedicated to revolutionizing your shopping experience. Unleash the power of online shopping with our user-friendly platform, extensive product range, and exceptional customer service. Whether you're seeking everyday essentials or indulging in luxury items, we're here to exceed your expectations. Embrace the future of retail and embark on a thrilling shopping adventure with us."</p>
                        <div className="flex justify-center mb-4">
                            <NavLink to="/products">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show Now</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:flex-grow w-full flex flex-col mb-8 md:mb-0 justify-center ">
                        <div className="w-full flex gap-3 justify-center ">
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl " alt="hero" src="https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1506890533526-95e6102ad03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                        <div className="w-full  flex gap-2 justify-center items-center my-2">
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                        <div className="w-full flex gap-3 justify-center">
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1601790471088-dae753045d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                            <img className="w-28 h-32 lg:w-1/3 sm:w-1/4 object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
