import React from 'react'
import AboutHero from '../components/aboutHero'
import Aboutsec from '../components/aboutsec';
import AboutPopularProduct from '../components/aboutPopularProduct';


const page = () => {
    return (
      <div>
        <AboutHero />
            <Aboutsec />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page
