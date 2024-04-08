
import { useState ,useCallback,useEffect, useRef } from 'react'


function App() {
 const [length, setLength] = useState(8);
 const [numAllow, setNumAllow] = useState(false);
 const [charAllow, setCharAllow] = useState(false);
 const [password, setPassword] = useState("");

 const passwordRef = useRef(null);
 
  const passGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str += "01234567890"
    if(charAllow) str += "!@#$%^&*~+-(){}[];"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      // console.log(pass);
    }
    setPassword(pass)

  } , [length, numAllow, charAllow, setPassword])


  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator] )

  return (
    <>
       <div className='w-full max-w-md text-white bg-gray-600 mx-auto px-4 py-3 my-8 rounded-lg '> 
       <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow-lg overflow-hidden mb-4 text-black'>
          <input type="text"
          value = {password}
          placeholder='Password'
          className='outline-none w-full mx-2 p-3 rounded-lg'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className='bg-blue-400 shrink-0  outline-none text-white rounded-lg px-3 py-0.5'>Copy</button>
        </div>

        <div className='flex gap-x-1 text-sm'>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="range" 
                  min={8}
                  max={31}
                  value={length}
                  onChange={(e) => {setLength(e.target.value)}}
                  className=' cursor-pointer'
                  />
                  <label>Length : {length}</label>
              </div>
              <div className='flex gap-x-3 items-center mx-6'>
                
                <input type="checkbox" 
                id="charAllow"
                defaultChecked = {charAllow}
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
                />
                <label htmlFor="charAllow">charactes</label>
              
              
               
                <input type="checkbox"
                id='numAllow'
                defaultChecked = {numAllow}
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
                />
                <label htmlFor="numAllow">Numbers</label>
                
               
              </div>
        </div>
      </div>
    </>
  )
}

export default App
