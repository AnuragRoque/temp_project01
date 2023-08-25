import React from 'react';
import "./HomePage.css";
import video from "../assets/images/video.mp4"
 const HomePage = () => {
  return (
    // <div>Hello from the homepage</div>
    <div className='videohomepage'>
    <video autoPlay muted loop className='video-background'>
    <source src={video} type="video/mp4" />
    
      {/* <source src="../assets/images/background-video.mp4 " type="video/mp4" /> */}
      Your browser does not support the video tag.
    </video>
   
  </div>
  );
};


export default HomePage;