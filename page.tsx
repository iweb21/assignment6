import Image from "next/image";
import React from "react";
import Topbar from "./Components/Topbar";

import Hero from "./Components/Hero";
import Navbar from "./Components/Nav";
import Logo from "./Components/Logo";
import Category from "./Components/Category";
import Achievements from "./Components/Achievement";
import Courses from "./Components/Courses";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";





export default function page() {
  return (
    <div>
            <Topbar/>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Category/>
      <Achievements/>
      <Courses/>
      <Team/> 
      <Testimonials/>
      <Footer/>

    </div>
  )
}


