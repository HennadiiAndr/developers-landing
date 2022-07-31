import React from 'react';
import LOGO from '../assets/Logo.png';
import '../styles/headerStyle.scss';

function Header(){
   return(
      <div className='header-wrapper'>
         <div className='header'>
            <div className='logo'>
               <img src={LOGO} alt='logo'></img> 
            </div>
            <div className='navMenu-orderWrapper'>
               <nav className='navMenu-wrapper'>
                  <div className='navMenu-item'>Услуги</div>
                  <div className='navMenu-item'>Портфолио</div>
                  <div className='navMenu-item'>Этапы</div>
                  <div className='navMenu-item'>Дизайнеры</div>
               </nav>
               <button className='orderButton'>Заказать</button>
            </div>
         </div>
      </div>
   )
}

export default Header;