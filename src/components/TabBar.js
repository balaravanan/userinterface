import React, {useState} from 'react'
import "../components/TabBar.css"
import { AiFillHome, AiFillHeart, AiOutlineSearch, RiShieldUserFill } from 'react-icons/all';

function TabBar() {
    const [toggleClassName, setClassName] = useState("tab");

    
  function onClick() {
    if (toggleClassName.includes("active")) {
      setClassName("");
      console.log({ toggleClassName });
    } else {
      setClassName("active");
      console.log({ toggleClassName });
    }
  }
    return (

        
        <div>
            <h3>Jai Tab-Bar</h3>
             <div className="tab-nav-container">
      <div onClick={onClick} className={`tab ${toggleClassName} home`}>
          <AiFillHome />
        <p className='icontop'>Home</p>
      </div>
      <div onClick={onClick} className={`tab ${toggleClassName} heart`}>
        <AiFillHeart/>
        <p className='icontop'>Likes</p>
      </div>
      <div onClick={onClick} className={`tab ${toggleClassName} search`}>
          <AiOutlineSearch/>
        <p className='icontop'>Search</p>
      </div>
      <div onClick={onClick} className={`tab ${toggleClassName} user`}>
          <RiShieldUserFill/>
        <p className='icontop'>Profile</p>
      </div>
    </div>
        </div>
    )
}

export default TabBar
