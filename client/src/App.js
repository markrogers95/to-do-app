import React, { useState, useEffect} from 'react';
import { getList } from './API';

const App = () =>{
  
  const [listItem, setListItem] = useState([]);

  const getItems = async () => {
    
    const listItem = await getList();
    setListItem(listItem);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <React.Fragment>
      <div className = "title-wrap">
        <h1 className = "title">Mark's TODO list!</h1>
      </div>
      {listItem.map(entry => (
        <div className = "item-body">
          <h2 className = "list-title">
            {entry.title}
          </h2>
          {entry.priority ? <p className="title-p">Priority: {entry.priority}</p> : null}
          <p className="list-p">
            {entry.description}
          </p> 
        </div>
      ))}
    </React.Fragment>
  );
}

export default App;
