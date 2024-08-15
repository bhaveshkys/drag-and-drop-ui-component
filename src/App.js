
import './App.css';
import Canvas from './components/Canvas';
import React from 'react';
function App() {
  
  return (
    <div className='h-screen '>
      <div className='h-[25%] bg-gray-200 font-sans font-bold text-6xl text-blue-300 flex justify-center items-center'>
        REACT DRAG AND DROP <div className='text-black ml-2 text-3xl contents'>  component</div>
      </div>
      <div className='h-[75%]'>
      <Canvas/>
        </div> 
    
    </div>
  );
}

export default App;
