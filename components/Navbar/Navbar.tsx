'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
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
        menuBtn?.addEventListener('click', () => {
        menuBtn.classList.toggle('open')
        })

        //End of useEffect()
    },[]);
    return (
        <div className='navbar'>
          <Link href="/">
            <Image src='/images/Logo.png' alt="Logo" width={350} height={82} unoptimized/>
          </Link>
          <div className="menu-btn">
            <div className="menu-btn_burger"></div>
          </div>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
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
    )
}