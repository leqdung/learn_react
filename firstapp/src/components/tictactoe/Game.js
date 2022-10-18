import './GameStyle.css';
import Board from './Board';
import { useState } from 'react';
import { calculateWinner } from '../../helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xisNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xisNext);
  };
  return (
    <div>
      <Board cell={board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
