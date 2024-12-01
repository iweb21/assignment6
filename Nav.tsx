import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-100 text-black border-b-2 border-black py-4 mt-4 '>
        <div className="container mx-auto flex items-center justify-between px-4">
            <div className='flex items-center gap-2'>
                
                <img src="Dd.png" alt="Image" className="w-full h-auto" />
            </div>
            <div className="flex gap-6 border-2  bg-white border-gray-100 px-2 py-1 rounded-md">
                <a href="#Home" className="text-black hover:text-blue-500">Home</a>
                <a href="#Courses" className="text-black hover:text-blue-500">Courses</a>
                <a href="#Services" className="text-black hover:text-blue-500">Services</a>
                <a href="#Achivements" className="text-black hover:text-blue-500">Achivements</a>
                <a href="#AboutUs" className="text-black hover:text-blue-500">AboutUs</a>
                <a href="#Testimonial" className="text-black hover:text-blue-500">Testimonial</a>
                <a href="#login" className="bg-white-500 text-black  border border-black rounded-md py-1 px-3 ">Login</a>
                <a href="#signup" className="bg-black text-white py-1 px-2 rounded-md ">Signup</a>
            </div>

            
        </div>

    </nav>
  )
}

export default Navbar