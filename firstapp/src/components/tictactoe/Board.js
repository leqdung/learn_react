import React from 'react';
import Cells from './Cells';
import { calculateWinner } from './helper.js';

const Board = () => {
  const test = [[null, null, null, 'X', 'X', 'X', null, 1, null]];
  console.log(calculateWinner(test));
  return (
    <div className='game-board'>
      {Array[9].fill().map((item, index) => (
        <Cells key={index}></Cells>
      ))}
    </div>
  );
};

export default Board;
