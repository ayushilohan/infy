import React from 'react';
import infosys from '../asset/infosys.jpg'

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${infosys})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '92.3vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
    </div>
  );
};

export default HomePage;