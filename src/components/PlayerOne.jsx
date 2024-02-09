import React, { useState } from 'react';

const PlayerOne = () => {
  const [counterPlayerOne, setCounterPlayerOne] = useState(0);

  const handleAdd = () => {
    setCounterPlayerOne(counterPlayerOne + 1);
  };
  const handleSubstract = () => {
    setCounterPlayerOne(counterPlayerOne - 1);
  };

  return (
    <div className="player-one">
      <div className="player-one-add" onClick={handleAdd}>
        <h1> {counterPlayerOne}</h1>
      </div>

      <div className="player-one-substract" onClick={handleSubstract}></div>
    </div>
  );
};

export default PlayerOne;
