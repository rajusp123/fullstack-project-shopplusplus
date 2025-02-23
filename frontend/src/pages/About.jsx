/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Fashion is all about expressing yourself through clothing, whether its following trends or creating your own unique style. Some key aspects of fashion in clothing include:
            Trendy vs. Timeless, Trends change quickly, but classics like a white shirt, black dress, or well-fitted jeans never go out of style.
            Fabric Matters Cotton for comfort, wool for warmth, silk for luxury—choosing the right fabric makes all the difference.</p>
          <p>Fashion is the creation of clothing, accessories, and more that people use to express themselves and their identities. Fashion can also refer to the styles and trends that are popular at a given time. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to providing convenient access to a wide range of products, delivering exceptional customer service, and prioritizing customer satisfaction while striving to meet their specific needs through a user-friendly online shopping experience. </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Ecommerce platforms offer full automation, including finance systems, inventory, shipping and customer service. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping online gives you access to a bigger range of products than you had find in physical stores. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>Allows for seamless integration of various customer support tools, provides a readily available digital platform for interaction, enables personalized communication, and ultimately leads to higher customer satisfaction and loyalty. </p>
        </div>
      </div>
      <NewletterBox/>
    </div>
  )
}

export default About
