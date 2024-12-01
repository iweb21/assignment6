import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Topbar() {
  return (
    <div className="bg-gray-100 text-black border-b-2 border-black text-m w-1280px h-7678px top-100px left-100px border-1px md:shrink-0">
        <div className='container mx-auto flex justify-between items-center py-2 px-4 '>
        <div>
  <span className="mr-4"> Phone Number: 956 742 455 678   |</span>
  <span>
     Email: 
    <a href="Email:info@ddsgnr.com" className="hover:underline">
    Email:info@ddsgnr.com
    </a>
  </span>
</div>
<div className="flex gap-3">
    <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
    <FaFacebookF />
    </a>
    <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
    <FaInstagram/>
    </a>
    <a href="https://twiter.com" target="_blank" className="hover:text-blue-400">
    <FaTwitter/>
    </a>
    <a href="https://linkdin.com" target="_blamk" className="hover:text-blue-700">
    <FaLinkedinIn/>
    </a>
    


</div>

        </div>
    </div>
  )
}

export default Topbar

