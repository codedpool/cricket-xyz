import React from 'react';
import { User, Lock } from 'lucide-react';

export default function App() {
  const login=()=>{
    alert("Login successful!!");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100" style={{backgroundImage: "url('/api/placeholder/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="relative w-96 p-8 bg-white rounded-3xl flex flex-col items-center shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"></div>
        <form className="w-full">
          <h2 className="text-3xl text-green-800 text-center mb-8 font-bold">Pitch In</h2>
          
          <div className="relative mb-6">
            <input type="email" id="email" required className="w-full h-12 bg-transparent border-b-2 border-green-300 outline-none text-green-800 px-1 py-2 focus:border-green-500 transition-colors duration-300" />
            <label htmlFor="email" className="absolute left-1 top-12 text-green-600 pointer-events-none transition-all duration-300 ease-in-out">Email</label>
            <User className="absolute right-2 top-2 text-green-600" size={20} />
          </div>
          
          <div className="relative mb-6">
            <input type="password" id="password" required className="w-full h-12 bg-transparent border-b-2 border-green-300 outline-none text-green-800 px-1 py-2 focus:border-green-500 transition-colors duration-300" />
            <label htmlFor="password" className="absolute left-1 top-12 text-green-600 pointer-events-none transition-all duration-300 ease-in-out">Password</label>
            <Lock className="absolute right-2 top-3 text-green-600" size={20} />
          </div>
          
          <div className="flex justify-between text-sm text-green-600 mb-6">
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-1  accent-green-500"  />
              Keep me not out
            </label>
            <a href="#" className="hover:text-green-800 transition-colors duration-300">Lost my wicket</a>
          </div>
          
        
  <button type="submit" onClick={login} className="w-full h-19 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium text-lg transition-colors duration-300">
    Pad Up
  </button>

          <div className="text-center text-green-600 mt-4">
            <p>New to the crease? <a href="signup" className="text-green-800 hover:underline">Join the team</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}