import { useCallback, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [symbolsAllowed, setSymbolsAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordAsRef = useRef(null);
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

  return (
    <div>
      <h1 className="text-6xl">Password Generator</h1>
      <div id="password-gen" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg m-5">
        <input type="text" placeholder="Password" readOnly value={password} ref={passwordAsRef} className="bg-gray-800 dark:bg-white p-1 size-10/10 rounded-lg"></input>
        <input type="range"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>
    </div>
  )
}

export default App
