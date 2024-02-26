import React, { useState } from 'react';
import './playerOne.css';
import image from '../../public/spiderman.png';

const PlayerOne = () => {
  const [counterPlayerOne, setCounterPlayerOne] = useState(0);

  const handleAdd = () => {
    setCounterPlayerOne(counterPlayerOne + 1);
  };
  const handleSubstract = () => {
    setCounterPlayerOne(counterPlayerOne - 1);
  };

  return (
    <div className="player-one-container">
      <div className="player-one-add" onClick={handleAdd}>
        <h1> {counterPlayerOne}</h1>
        <img className="player-img" src={image} alt="Player one image" />
      </div>

      <div className="player-one-substract" onClick={handleSubstract}></div>
    </div>
  );
};

export default PlayerOne;
