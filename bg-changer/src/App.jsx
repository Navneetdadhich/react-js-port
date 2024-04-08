
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className="h-screen w-full justify-center flex "
    style={{backgroundColor : color}}
    >

      <div className=" fixed bottom-12 justify-center inset-x-0 flex flex-wrap px-2 ">
     <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-3 rounded-3xl ">

      <button
      onClick={()=>{ setColor("red")}}
      className=" bg-red-600 p-3 rounded-3xl shadow-lg text-white">Red</button>
      <button
      onClick={()=>{ setColor("green")}}
      className=" bg-green-600 p-3 rounded-3xl shadow-lg text-white">Green</button>
      <button
      onClick={()=>{ setColor("yellow")}}
      className=" bg-yellow-300 p-3 rounded-3xl shadow-lg text-black">yellow</button>
      <button
      onClick={()=>{ setColor("blue")}}
      className=" bg-blue-600 p-3 rounded-3xl shadow-lg text-white">blue</button>
      <button
      onClick={()=>{ setColor("gray")}}
      className=" bg-gray-600 p-3 rounded-3xl shadow-lg text-white">gray</button>
     </div>
      </div>
    </div>
    </>
  )
}

export default App
