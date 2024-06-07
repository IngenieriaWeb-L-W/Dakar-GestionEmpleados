import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='relative w-screen h-screen bg-black bg-opacity-25'>
      <div className='absolute inset-y-0 left-0 z-10 w-full h-full'>
        <ReactLoading type='bars' color='#000000' height={'20%'} width={'20%'} />
      </div>
    </div>
  );
};

export {Loading};
