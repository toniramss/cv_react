import { useState } from 'react'

import './App.css'

import './output.css'

import CVForm from './components/CVForm';
//import CVPreview from './components/CVPreview';

import CVPreview from './components/CVPreview';


import "https://cdn.tailwindcss.com"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
      <CVPreview />


     

      
    </div>
      
    </>
  )
}

export default App
