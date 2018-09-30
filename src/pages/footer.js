import React from 'react';
import {
   Link
} from 'react-router-dom';
import './css/footer.css';

const Footer = () => (
   <footer>
      <div className="social-media">
         <img src={require('../assets/pics/vk.png')} alt="vk" />
         <img src={require('../assets/pics/facebook.png')} alt="facebook" />
         <img src={require('../assets/pics/instagram.png')} alt="instagram" />
         <img src={require('../assets/pics/twitter.png')} alt="twitter" />
      </div>
      <div className="bottom">
         <img src={require('../assets/pics/logo-white.png')} alt="fastservice.kz" />
         <p>FastService, All rights reserved, 2018</p>
      </div>
   </footer>
)

export default Footer;