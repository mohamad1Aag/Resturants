import React from 'react';
import './Home.css'
import QRCodeComponent from "../components/QRCodeComponent";
import Footer from '../Footer.jsx'

function Home() {
  return (
    <div className="bigcontainer">
      <h1 className='paragraph'>مرحبا بك في اركان للسياحة والسفر والحج والعمرة</h1>
      <p className='smalparagraph'>استمتع وكن بأمان خلال السفر والحج والعمرة مع فريق متخصص </p>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr-q172h5Gac0he-W_P9WWunMwkjCVof0zg&s" alt="notfound" /> */}
     
     <div className='big_image'>
       <img  className='image' src="https://scontent.fmci2-1.fna.fbcdn.net/v/t39.30808-6/468330378_1118916199926973_1931048558960317381_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8Ki20q7-o6sQ7kNvwEED6ov&_nc_oc=AdkjDob4qS4ssWXUHrnwRw-RoRnxeun_Ub8At_9dpdl81Q_sJMm1UmWWbf2R-kWdJfg&_nc_zt=23&_nc_ht=scontent.fmci2-1.fna&_nc_gid=MRT9u01o16J0PhMBtRje5A&oh=00_AfKxjctuvVUTdnct-VIH5jpSbFDB9OD8zOQvp5hCjohnDg&oe=68281E70" alt="notfound" />
     </div>
     <div className="buttservices"> 
     <a href="http://localhost:5173/Resturants/Menu.jsx#/menu">
     <input type="button"  className='buttontogotoservices' value=" صفحة الخدمات" aria-label='' />
     </a>
     </div>
<QRCodeComponent/>
<Footer />
    </div>
  );
}

export default Home;
