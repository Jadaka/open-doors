import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className='error'>
      { props.message }
    </div>
  );
}

export default ErrorMessage;