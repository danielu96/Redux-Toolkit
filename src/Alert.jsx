import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, tasks }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [tasks]);
  return ( 
  <>

  <div   className=  {`alert alert-${type}`}  
  >   
    {msg}
  </div>
  
  </>)
};
export default Alert;


