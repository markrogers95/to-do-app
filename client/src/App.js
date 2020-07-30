import React, { useState, useEffect} from 'react';
import { getList, deleteItem } from './API';

import AddItemForm from './AddItemForm';

const App = () =>{
  
  const [listItem, setListItem] = useState([]);
  const [formState, setFormState] = useState("");

  const getItems = async () => {
    
    const listItem = await getList();
    setListItem(listItem);
  }

  useEffect(() => {
    getItems();
    setFormState("");
  }, []);

  return (
    <React.Fragment>
      <div className = "title-wrap">
        <h1 className = "title">Mark's TODO list!</h1>
      </div>
      {listItem.map(entry => (
        <div className = "item-body" key={entry._id}>
          <h2 className = "list-title">
            {entry.title}
          </h2>
          {entry.priority ? <p className="list-p">Priority: {entry.priority}</p> : null}
          <p className="list-p">
            {entry.description}
          </p> 
          {entry.comments ? <p className="list-p">Priority: {entry.comments}</p> : null}
          <p className = "list-p">
            Date added: <i>{new Date(entry.createdAt).toLocaleDateString()}</i>
          </p>
          {entry.dueDate ? 
          <p className = "list-p">
            Due Date: <i>{new Date(entry.dueDate).toLocaleDateString()}</i>
          </p> : null}
          <button className = "list-p"
          onClick = {() => {
            deleteItem(entry._id);
            console.log(entry._id);
            getItems();
          }}>Delete</button>
        </div>
      ))}
      <button className="add-new"
              onClick = {() => {
                setFormState('T');
                console.log(formState);
              }}>
                Add new item!
      </button>
      {formState ? <div className="popup">
        <AddItemForm className="popup entry-form" onClose = {() => {
                        setFormState(null);
                        getItems();
        }}></AddItemForm></div> : null} 
    </React.Fragment>
  );
}

export default App;
