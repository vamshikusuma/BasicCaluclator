import { useState } from 'react'
import './App.css'
import Buttons from './Buttons'

function App() {
  
let[count,setCount]=useState("")

    function handleClick(value){
    setCount(count+value)
  }

  function result(){
    let m =eval(count)
    console.log(m)
    setCount(m)
  }

  function clear(){
    setCount('')
  }

  return (
    <>
    <div>
    <h2>Caluclator </h2>

  <input type="text" value={count} readOnly />
  <br />
  <br />
    <Buttons handleElement={
      handleClick
    } result={result} clear={clear}
    ></Buttons>
    </div>
     
     
    </>
  )
}

export default App
