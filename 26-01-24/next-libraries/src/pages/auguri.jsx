
import React, { useState } from 'react';
import Confetti from index.jsx

const Auguri = () => {
  const [coloreCoriandoli, setColoreCoriandoli] = useState('');

  const handleInputChange = (e) => {
    setColoreCoriandoli(e.target.value);
  };

  return (
    <div>
      <h1>Auguri!</h1>
      <label htmlFor="coloreInput">Colore dei Coriandoli: </label>
      <input
        type="text"
        id="coloreInput"
        value={coloreCoriandoli}
        onChange={handleInputChange}
      />
      <Confetti colore={coloreCoriandoli} />
    </div>
  );
};

export default Auguri;
