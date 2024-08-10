import React, { useState } from 'react';

const PasswordGenerator = () => {
  // State hooks to manage password properties
  const [password, setPassword] = useState('45151351313'); // State to hold the generated password
  const [length, setLength] = useState(12); // State to hold the password length
  const [includeUppercase, setIncludeUppercase] = useState(true); // State to toggle uppercase letters
  const [includeLowercase, setIncludeLowercase] = useState(true); // State to toggle lowercase letters
  const [includeNumbers, setIncludeNumbers] = useState(true); // State to toggle numbers
  const [includeSymbols, setIncludeSymbols] = useState(true); // State to toggle symbols

  // UI structure with controlled components
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <img src="https://png.pngtree.com/png-clipart/20240310/original/pngtree-little-cute-robot-funny-virtual-assistant-bot-png-image_14551911.png" alt="Robot" className="mx-auto mb-4 w-20 h-20" />
        <h2 className="text-2xl font-bold text-center text-white mb-4 w-full bg-green-700  py-4 rounded-3xl">Random Password Generator</h2>
        <p className="text-sm text-center text-gray-300 mb-6">Secure, Strong and Unique passwords to keep your accounts safe online</p>

        <div className="w-auto bg-my-imag  rounded p-2">
        <input 
          type="text" 
          value={password} 
          readOnly 
          className="w-full p-2 text-center bg-gray-700 text-white rounded-full mb-4" 
        />

        
        <div className="flex items-center justify-center ">
  <button 
    onClick={() => setPassword('')} 
    className="pr-4 pl-4 text-center bg-green-800 text-white font-bold py-2 rounded-full p-5"
  >
    Generate
  </button>
</div>

        </div>
       <div className="     mb-4 mt-4 "> 
        <div className="mt-2 ">
          <div className="flex items-center justify-center ">
          <label className="text-white item center pr-4 pl-4 text-center bg-green-800 font-bold py-2 rounded-full p-5 mb-2">Password Length ({length})</label> </div>
          <input 
          
            type="range" 
            min="6" 
            max="64" 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
            className="w-full mb-4"
          />
        

        <div className="text-white">
          <label className="flex items-center mb-4">
            <input 
              type="checkbox" 
              checked={includeUppercase} 
              onChange={(e) => setIncludeUppercase(e.target.checked)} 
              className="mr-2" 
            />
            Uppercase (ABC)
          </label>
          <label className="flex items-center mb-4">
            <input 
              type="checkbox" 
              checked={includeLowercase} 
              onChange={(e) => setIncludeLowercase(e.target.checked)} 
              className="mr-2" 
            />
            Lowercase (abc)
          </label>
          <label className="flex items-center mb-4">
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={(e) => setIncludeNumbers(e.target.checked)} 
              className="mr-2" 
            />
            Numbers (123)
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={(e) => setIncludeSymbols(e.target.checked)} 
              className="mr-2" 
            />
            Symbols (#&)
          </label>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
