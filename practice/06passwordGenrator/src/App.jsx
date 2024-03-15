import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    if (numberAllowed) {
      str += "0123456789";
    }
    console.log(str, numberAllowed);
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div id="container">
        <div id="mainContainer">
          <h1 className="uppercase font-bold text-center mb-6 text-2xl text-[#51829B] tracking-light">
            my password generator
          </h1>
          <input
            type="text"
            id="inputField"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <div id="toggleContainer">
            <div className="flex items-end gap-2 flex-col">
              <input
                type="range"
                className=" accent-[#51829B] w-full"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <p className="text-[#51829B]"> Length : {length}</p>
            </div>
            <div className="flex gap-4 justify-start md:justify-center  flex-wrap">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#51829B]"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((numberAllowed) => !numberAllowed);
                  }}
                />
                <p className="text-[#51829B]">Number Allowed</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#51829B]"
                  defaultChecked={charAllowed}
                  onChange={() => {
                    setCharAllowed((charAllowed) => !charAllowed);
                  }}
                />
                <p className="text-[#51829B]">Charcater Allowed</p>
              </div>
            </div>
            <button id="copyButton" onClick={copyPasswordToClipboard}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
