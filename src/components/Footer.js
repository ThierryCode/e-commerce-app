import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin, BsInstagram, BsGithub, BsYoutube} from 'react-icons/bs'

export const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="Newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input type="text" 
                className="form-control py-1" 
                placeholder="Your Email adress" 
                aria-label="Your Email adress" 
                aria-describedby="basic-addon2"/>
                <span className="input-group-text py-2" 
                id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className="">
                <address className='text-white'>Lot E-308 Mendrikolovana Alasora, 
                <br />Antananarivo (103) 
                </address>
                <a className='text-white mt-3 d-block mb-2' href="tel:+261 33 08 154 86">+261 33 08 154 86</a>
                <a className='text-white mt-3 d-block mb-2' href="mailto:dadaieo@dadaieo.com">dadaieo@dadaieo.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href=""><BsInstagram className='fs-4'/></a>
                  <a className="text-white" href=""><BsLinkedin className='fs-4'/></a>
                  <a className="text-white" href=""><BsGithub className='fs-4'/></a>
                  <a className="text-white" href=""><BsYoutube className='fs-4'/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1" to="">Refund policy</Link>
                <Link className="text-white py-2 mb-1">Shipping policy</Link>
                <Link className="text-white py-2 mb-1" to="">Terms Of Policy</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1" to="/about">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1" to="/contact">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 '>
        <div className="container-xxl">
          <div className="rox">
            <div className="col-12">
              <div className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()}, 
                Powered By DadaieoShop
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
