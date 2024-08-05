import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mt-10'>
      <section className='w-full gap-6 md:justify-between bg-[#1E1842] flex flex-col md:flex-row p-5 text-white'>
        <div className='w-80 px-3 '>
            <h1 className='text-2xl font-bold'>Simplify how your team works</h1>
        </div>
        <div className='m-3'>
                <img src="http://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png" 
                className="w-48" alt="" />
        </div>
      </section>

      <footer className='bg-[#1D1E25]'>
        <section className='flex flex-col md:flex-row md:justify-between p-10 text-lg text-white font-extralight'>
            <div>
                <img src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png" alt=""  className='w-32'/>
                <ul className='flex text-white space-x-2 text-2xl mt-14 mb-10'>
                    <li><FaFacebook /></li>
                    <li><FaFacebookMessenger /></li>
                    <li><FaWhatsapp /></li>
                    <li><FaInstagram /></li>
                    <li><FaGithub /></li>
                </ul>
            </div>

            <div>
                <ul className='mb-10'>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
            </div>


            <div>
                <ul className='mb-10'>
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Policy</li>
                    <li>About</li>
                </ul>
            </div>

            <div >
              <input type="text" className='border-2 rounded-full me-2 md:px-4 mb-3' placeholder='updates in your inbox '/>
              <button className='bg-orange-500 rounded-full px-6 py-[2px]'>GO</button>
              <p className='text-sm '>Copyright &copy; 2024. All rights reserved.</p>

            </div>
  
           
        </section>
       
        <h2 className='text-center mt-3 font-mono text-white p-3'>Developed by Ajay ✌️</h2>
      </footer>
    </div>
  )
}

export default Footer
