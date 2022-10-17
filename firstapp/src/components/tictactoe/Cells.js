import React from 'react';

const Cells = (props) => {
  return (
    <div className='game-cell'>
      {props.value} onClick = {props.onClick}
    </div>
  );
};

export default Cells;
