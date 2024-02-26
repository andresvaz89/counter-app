import React, { useState } from 'react';
import './villain.css';
import image from '../../public/rhino-I.png';

const Villain = () => {
  const [counterVillain, setCounterVillain] = useState(0);

  const handleAdd = () => {
    setCounterVillain(counterVillain + 1);
  };
  const handleSubstract = () => {
    setCounterVillain(counterVillain - 1);
  };

  return (
    <div className="villain-container">
      <div className="villain-add" onClick={handleAdd}>
        <h1> {counterVillain}</h1>
        <img className="villain-img" src={image} alt="Villain image" />
      </div>

      <div className="villain-substract" onClick={handleSubstract}></div>
    </div>
  );
};

export default Villain;
