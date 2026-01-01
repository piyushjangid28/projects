import React from 'react'
import './App.css'
import photo from "./assets/photo.jpg";

function App(){

  return(

    <div className='body'>
      <div className="class">
        <p>◄ BACK TO ALL PLANTS</p>
        <hr />
      </div>
      <div className="o1">
        
        <h2>CLASSIC PEACE LILY</h2>
        <h4>POPULAR HOUSE PLANT</h4>
        <h1>$18</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur </p>
        <button>ADD TO CART</button>
        <button>WISHLIST</button>     
        
        </div>
      
      
      <div className="o2">
            <img src={photo} alt="img" />
      </div>
    </div>

  )

}



export default App
