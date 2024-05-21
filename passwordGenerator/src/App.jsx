import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');


  const passwordRef = useRef(null);

  const CopypasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const generatorPassword = useCallback(() => {

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatorPassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text" 
      value={password}
      placeholder='Password'
      readOnly
      ref={passwordRef}
      className="outline-none w-full py-1 px-3"
      />
      <button onClick={CopypasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
    </div>
    
    <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min= "1"
        max= "20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="cursor-pointer"
        id=""
        name=""
        />
        <label htmlFor='length'>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={numberAllowed}
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev)}}
        name=""
        id=""/>
        <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={charAllowed}
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => !prev)}}
        name=""
        id=""/>
        <label htmlFor="charInput">Characters</label>
        </div>
    </div>
  </div>
  )
}

export default App
