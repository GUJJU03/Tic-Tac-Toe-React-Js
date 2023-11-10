import React, { Component } from 'react'
import { TicTacToe } from './Components/TicTacToe/TicTacToe';
import circle_img from '../src/Components/Assets/circle.png'
import cross_img from '../src/Components/Assets/cross.png'

export const App = () => {
  
  return (
    <div>
      <TicTacToe/>
    </div>
  );

  const click = (e) => {
    

    

    console.log(e)
  }
}

export default App;
