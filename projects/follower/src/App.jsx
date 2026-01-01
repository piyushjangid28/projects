import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data,setdata]=useState(false)

  const [value,setvalue]=useState(0)

  // function handledata(){

  //   setdata(!data) 
  // }

 

  const handleclick=()=>{

    if(data)
      {
      setvalue(value-1)
      setdata(false)
    }
    else
    {
      setvalue(value+1)
      setdata(true)
    }
    
   
  }


  return (
    <>
      <h1> followers : {value} </h1>
      <button onClick={handleclick}>{data ? "following" : "follow"}</button>

    </>
  )
}

export default App



 



