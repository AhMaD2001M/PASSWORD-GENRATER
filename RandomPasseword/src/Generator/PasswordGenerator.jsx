import React, { useState } from 'react';

const PasswordGenerator = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <img src="https://png.pngtree.com/png-clipart/20240310/original/pngtree-little-cute-robot-funny-virtual-assistant-bot-png-image_14551911.png" alt="Robot" className="mx-auto mb-4 w-20 h-20" />
        <h2 className="text-2xl font-bold text-center text-white mb-4">Random Password Generator</h2>
        <p className="text-sm text-center text-gray-300 mb-6">Secure, Strong and Unique passwords to keep your accounts safe online</p>
        <input 
          type="text" 
          value={password} 
          readOnly 
          className="w-full p-2 text-center bg-gray-700 text-white rounded mb-4" 
        />
        <button 
          onClick={generatePassword} 
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
        >
          Generate
        </button>

        <div className="mt-6">
          <label className="text-white">Password Length ({length})</label>
          <input 
            type="range" 
            min="6" 
            max="64" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            className="w-full mb-4"
          />
        </div>

        <div className="text-white">
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={includeUppercase} 
              onChange={(e) => setIncludeUppercase(e.target.checked)} 
              className="mr-2" 
            />
            Uppercase (ABC)
          </label>
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={includeLowercase} 
              onChange={(e) => setIncludeLowercase(e.target.checked)} 
              className="mr-2" 
            />
            Lowercase (abc)
          </label>
          <label className="flex items-center mb-2">
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
            Characters (#&)
          </label>
        </div>
      </div>
    </div>
    </>
  );
};

export default PasswordGenerator;
