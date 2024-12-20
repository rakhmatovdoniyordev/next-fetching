"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";


const Heaeder = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname()

  const activeClass = (path) => {
    return pathname === path ? "underline font-bold" : ""
  }

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 200) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    })
  }, [])
  return (
    <header className={`fixed w-full top-0 z-40 backdrop-blur-sm ${header ? "bg-[#ffffffdc]  text-black" : "text-white bg-[#0000007a]"}`}>
      <div className="container">
        <nav className='flex h-[80px] items-center justify-between'>
          <div>
            <h1 className='font-bold text-[28px]'>Panto</h1>
          </div>
          <ul className='flex items-center gap-[60px]'>
            <li>
              <a href="/" className={activeClass("/")}>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/shop" className={activeClass("/shop")}>
                <span>Shop</span>
              </a>
            </li>
            <li>
              <a href="/about" className={activeClass("/about")}>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="/contact" className={activeClass("/contact")}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div>
            <a href="#"><FaShoppingCart/></a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Heaeder