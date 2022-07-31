import React from 'react';

import Header from './header.js';
import Hero from './hero.js';

import '../styles/AppStyle.scss';

function App(){
   return <div className='main'>
      <div className='mainflow'>
         <Header />
         <Hero />
      </div>
   </div>
}

export default App