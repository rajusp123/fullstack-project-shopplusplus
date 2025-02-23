import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} />
            <p className='w-full md:w-2/3 text-gray-600'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, qui ratione ipsum reiciendis nam pariatur sapiente aperiam sunt aliquam voluptatum corporis optio, totam saepe, modi nemo consectetur mollitia! Beatae, aut?
            </p>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-222-567-7891</li>
                <li>contactat123.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@shopplusplus.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
