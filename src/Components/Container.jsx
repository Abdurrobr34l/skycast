import React from 'react';

const Container = ({children}) => {
  return (
    <div className='container mx-auto pt-6 px-5 md:px-10 lg:px-14'>
      {children}
    </div>
  );
};

export default Container;