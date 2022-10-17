import React from 'react';
import { calculateWinner } from './helper.js';

const Board = (props) => {
  const Cell = [null, null, null, 1, 1, 1, null, null, null];
  console.log(calculateWinner(Cell));
  return (
    <div className='game-board'>
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
