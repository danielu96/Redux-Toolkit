import React from 'react'
// import { useSelector } from "react-redux";
const SingleItem = (task) => {

  return (
    <div>
      {/* <h3>SingleItem</h3> */}
<p> {task.content}</p>
<p></p>
    </div>
  )
}

export default SingleItem