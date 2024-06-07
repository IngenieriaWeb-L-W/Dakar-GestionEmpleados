import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-black bg-opacity-25'>
      <ReactLoading type='spin' color='#000000' height={'20%'} width={'20%'} />
    </div>
  );
};

export { Loading };
