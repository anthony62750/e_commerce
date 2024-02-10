import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='items'>
          <h1>Categorie</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='items'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='items'>
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sequi maxime possimus dolor quam quasi voluptate? Vel aliquam a distinctio laudantium iste voluptates fugiat, amet saepe vitae ad soluta inventore!</span>
        </div>
        <div className='items'>
          <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam rerum unde delectus facere fugit fugiat nulla asperiores nihil eligendi, minima consequatur aperiam ab alias laudantium, similique sapiente architecto adipisci.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className="logo">AllardStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer