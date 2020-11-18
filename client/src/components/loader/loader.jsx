import React from 'react';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const SpinningLoader = () => (
    <div className='Loader Loader--fade-out'>
      <Loader
        type="ThreeDots"
        color="#231e32"
        height={200}
        width={200}
        timeout={1000}
      />
    </div>
);

export default SpinningLoader;
