import React, { useState, useEffect } from 'react';

function CSR() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message));
  }, []);

  return (
    <div>
      <h1>Client Side Rendering</h1>
      {dogImage && <img src={dogImage} alt="Random Dog" />}
      <button onClick={() => window.location.reload()}>
        Otro ❤️
      </button>
    </div>
  );
}

export default CSR;
