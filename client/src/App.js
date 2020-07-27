import React, { useState, useEffect} from 'react';

const App = () =>{
  
  const [toDoItem, setToDoItem] = useState([]);

  return (
    <React.Fragment>
      <div className = "title-wrap">
        <h1 className = "title">Mark's TODO list!</h1>
      </div>
      <div className = "list-body">
        <p>Here will be my list</p>
      </div>
    </React.Fragment>
  );
}

export default App;
