import { useState } from "react"



function Header()
{
    const [data,setdata]=useState(0)

    function handleclick(){
        setdata(data+1)
    }

    function minusclick(){
        setdata(data-1) 
    }

    return(
        <>
        <h1>count : {data}</h1>
        <button onClick={ handleclick}>+</button>
        <button onClick={ minusclick}>-</button>
        </>
    )
}
export default Header
