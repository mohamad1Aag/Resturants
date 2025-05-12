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
       <img  className='image' src="public/468330378_1118916199926973_1931048558960317381_n.jpg" alt="notfound" />
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
