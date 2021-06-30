import React, {useState} from "react";
import ToDoLists from './ToDoLists';

const App = () => {

    const [inputList, setinputList] = useState("");
    const [Items, setItems] = useState([]);


    const itemEvent =(event) => {
      setinputList(event.target.value)
    };

    const ListOfItems = () => {
      setItems((oldItems) =>{
        
        setinputList('');
        return [...oldItems,inputList];
      })
    };

    const deleteItems= (id) =>{
      console.log("deleted");

      setItems((oldItems) =>{
        return oldItems.filter((arrElem, index) =>{
          return (index!==id);
        });
      });

  };

  return (
    <>  
    <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="Add a Items " value={inputList} onChange={itemEvent}/>
      
      <button className="newBtn" onClick={ListOfItems}> + </button>

      <ol>
        {/* <li>{inputList} </li> */}
       { 
         Items.map((itemval, index) => {
          return( <ToDoLists
            key={index}
            id={index} 
            text={itemval}
            onSelect={deleteItems}
          />
          );
        })
       }
      </ol>
    </div>
    </div>
        </>
  )
}

export default App;
