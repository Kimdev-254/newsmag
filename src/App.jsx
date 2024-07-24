// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import NewsBoard from "./Components/NewsBoard"



// const App = () => {
//   const [category, setCategory] = useState("general")
//   return (
//     <div style={{ backgroundColor: 'black', color: 'white' }}>
//      <Navbar setCategory={setCategory}/>
//      <NewsBoard category={category}/>
//     </div>
//   )
// }

// export default App
import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <div className="app-container">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
