import { useCallback, useState, useRef,useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [symbolsAllowed, setSymbolsAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordAsRef = useRef<HTMLInputElement>(null);
  const passwordGen = useCallback(() => {
    let pass = "";
    let strData = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) strData += "0123456789";
    if (symbolsAllowed) strData += "!£$%^&*(){}[]'#@~/?.>,<\|`¬;:"
    for (let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * strData.length+1);
      pass += strData.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, symbolsAllowed, setPassword]);

  const copyButton = useCallback(() => {
    passwordAsRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);


  useEffect( () => {
    passwordGen();
  },[length, numbersAllowed, symbolsAllowed]);

  return (
    <>
      <h1 className="text-6xl">Password Generator</h1>
      <div id="password-gen" className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg m-5 gap-1 flex flex-col w-xl">
        <div id="text-container" className="flex-row flex gap-0.5">
          <input id="password-text" type="text" placeholder="Password" readOnly value={password} ref={passwordAsRef}
          className="bg-gray-800 dark:bg-white p-2 size-10/10 rounded-l-lg"></input>
          <button id="copy-button" onClick={copyButton}  className="flex flex-row justify-center items-center rounded-r-lg text-white py-2 px-3 cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
            <img src="src\assets\clipboard.svg" className="relative invert vertical"></img>Copy
            </button> 
        </div>
        <div className="flex flex-row place-content-between items-center">
          <div id="length"className="items-center flex">
            <input id="slider" type="range" min="6" max="30" value={length} className="cursor-pointer"
              onChange={(e) => {setLength(Number(e.target.value))}}/>
            <label htmlFor="slider" className="m-2 text-white">Length: {length}</label>
          </div>
          <div id="checkboxes">
            <label htmlFor="number-check" className="m-2 text-white">Use Numbers</label>
            <input id="number-check" type="checkbox" defaultChecked={numbersAllowed} 
              onChange={()=>{setNumbersAllowed((prev)=> !prev)}} className=""/>

            <label htmlFor="symbol-check" className="m-2 text-white">Use Symbols</label>
            <input id="symbol-check"type="checkbox" defaultChecked={symbolsAllowed} 
              onChange={()=>{setSymbolsAllowed((prev)=> !prev)}} className=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
