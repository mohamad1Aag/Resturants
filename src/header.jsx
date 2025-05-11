import { useState } from 'react'

import './headder.css';

function Header() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className='header'>
            <a href="" className='logo_header'>logo</a>
            <input type="serch" className='inputSerch' />
        <ul>
            <a href=""><li>aobut us</li></a>
            <a href=""><li>login</li></a>
            <a href=""><li>logout</li></a>
            <a href=""><li>proudcet</li></a>
            <a href=""><li>contact us</li></a>
            <a href=""><li>contact us</li></a>
         
        </ul>
    </div>
    
    </>
  )
}

export default Header
