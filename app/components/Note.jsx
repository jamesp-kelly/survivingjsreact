import React from 'react';

export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
);





//equivalent to 
// export default (props) => <div>{props.task}</div>;