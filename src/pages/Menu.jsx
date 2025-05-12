import React from 'react';
import { Helmet } from 'react-helmet';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';
import  './menu.css';

function Menu() {
  return (<div className="div">
      <div className="divparagrahpMenu">
        <h3>الخدمات التي نقدمها للسوريين</h3>
      </div>
    <div className="container ">
      

      <div className="card" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH7haJa4EjspxRrwkBizfmAspv6Ko-ibX_Q&s" className="card-img-top" alt="..." />
        <div className="cardinsidebigcard">
          <h5 className="card_title">عنوان البطاقة</h5>
          <p className="card_text">محتوى البطاقة هنا.</p>
        </div>
          <a href="#" className="btnofcard">اضغط هنا</a>
      </div>
    
      <div className="card" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH7haJa4EjspxRrwkBizfmAspv6Ko-ibX_Q&s" className="card-img-top" alt="..." />
        <div className="cardinsidebigcard">
          <h5 className="card_title">عنوان البطاقة</h5>
          <p className="card_text">محتوى البطاقة هنا.</p>
        </div>
          <a href="#" className="btnofcard">اضغط هنا</a>
      </div>
    
      <div className="card" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH7haJa4EjspxRrwkBizfmAspv6Ko-ibX_Q&s" className="card-img-top" alt="..." />
        <div className="cardinsidebigcard">
          <h5 className="card_title">عنوان البطاقة</h5>
          <p className="card_text">محتوى البطاقة هنا.</p>
        </div>
          <a href="#" className="btnofcard">اضغط هنا</a>
      </div>
    
     
    </div>
   
    </div>
  );
}

export default Menu;
