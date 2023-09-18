import React from 'react'
import Search from './Search.gif';

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={Search} alt="Loading"/>
      </div>
    )
}

export default Spinner
