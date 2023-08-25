// Welcome.js

import React, { useState, useEffect } from 'react';
import './Welcome.css'; // Import your CSS file for component styling

const Welcome=()=> {
  

  return (
    <div className='welcomeheading'>
     <h1>WE LOVE TO </h1>  <h1 className='t2'>DISCOVER OUR LAGACY</h1>
     <div className='text'>
     <p id='textdesc'>WELCOME TO THE CRYPTO forbes - WHERE THE DIGITAL REVOLUTION MEETS HUMAN BRILLIANCE. 
     STEP INTO A DYNAMIC REALM WHERE INNOVATION IS THE CURRENCY AND PASSION FUELS THE BLOCKCHAIN
      FIRE. WE'RE NOT JUST LISTING NAMES; WE'RE UNVEILING THE ORCHESTRATORS OF CHANGE, THE REBELS
       WHO DISRUPTED THE NORMS, AND THE WIZARDS WHO TURNED VIRTUAL CURRENCIES INTO TANGIBLE REALITIES. 
       FROM THE TRAILBLAZERS WHO PAVED THE WAY TO THE RISING STARS ILLUMINATING THE PATH AHEAD, OUR
        CURATED COLLECTION CELEBRATES THE AUDACIOUS SPIRITS AND BRILLIANT MINDS STEERING THE SHIP
         IN THE EVER-EVOLVING CRYPTO STORM.</p>
     </div>
     <div className='marketinghub'>
     <hr></hr>
      <h1>MARKETING HUB LAUNCHING SOON</h1>
      
      <button className='btnjoinwaitlist'>JOIN WISHLIST</button>
      <hr></hr>
     </div>
     
    </div>
  );
}

export default Welcome;
