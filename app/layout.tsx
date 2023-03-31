"use client"

import './globals.css'
import Link from 'next/link'
import Logo from './Logo.png'
import Image from 'next/image'
import { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Navbar
  useEffect(() => {
    //Navbar Link Active Class Event Listener
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.addEventListener('click', event => {
        const target = event.target as Element;
        if (target.tagName === 'A' || target.tagName === 'IMG') {
          // Remove the 'clicked' class from all other links
          const links = navbar.querySelectorAll('a');
          links.forEach(link => {
            link.classList.remove('clicked');
          });

          // Add the 'clicked' class to the clicked link
          target.classList.add('clicked');
        }
      });
    }

    //Burger Menu Class Event Listener
    const menuBtn = document.querySelector('.menu-btn')
    let menuOpen = false
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('open')
    })

    //End of useEffect
  }, []);


  return (
    <html lang="en">
      <head>
        <title>Superhero Gadget | Low Price, High Value</title>
      </head>
      <body>
        <div className='navbar'>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={350} unoptimized/>
          </Link>
          <div className="menu-btn">
            <div className="menu-btn_burger"></div>
          </div>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/membership">Membership</Link>
            </li>
            <li>
              <Link href="/outlets">Outlets</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <main className='main'>
          {children}
        </main>
        <footer className="footer">
          <p>Extra Plus Digital &#40;002626260-H&#41; Copyright &copy; {new Date().getFullYear()}&nbsp; All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  )
}
