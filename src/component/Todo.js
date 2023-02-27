import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import List from "./List";

const Todo = () => {

    let [input,setInput]=useState();
    let [todos,setTodos]=useState([]);
    let [isUpdate,setIsUpdate]=useState();
    let [updateId,setUpdateId]=useState();

    const handleChange=(e)=>{
        setInput(e.target.value);

    }

    const handleAdd=()=>{
        if(isUpdate===true){
            setTodos(
                todos.map((elem)=>{
                    if(elem.id===updateId){
                        return {...elem,text:input}
                    }
                    return elem;
                })
            )
            setUpdateId(null);
            setInput("");
            setIsUpdate(false);
        }else{
            const todo={
                id:new Date().getTime().toString(),
                text:input
            };
            setTodos((preVal)=>[...preVal,todo]);
        }
        setInput("");
        
    }
    // for deleting list
    const handleDelete=(id)=>{
        const updatedTodos=todos.filter((elem)=>{
            return elem.id !== id
        })
        setTodos(updatedTodos)
        setUpdateId(null);
        setIsUpdate(false);
    }
    // for update the list
    const handleUpdate=(id)=>{
        const newTodo=todos.find((elem)=>elem.id===id);
        console.log(newTodo);
        setUpdateId(id);
        setInput(newTodo.text);
        setIsUpdate(true);
    }

  return (
    <div className="w-60 mt-5">
      <h1 className="text-center">ToDo App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Text Here ✍️..."
          aria-describedby="basic-addon2"
          value={input}
          onChange={handleChange}
        />
        <div className="input-group-append">
        {
            isUpdate ? <button className="btn btn-outline-dark" type="button" onClick={handleAdd}>
            Update
          </button> : <button className="btn btn-outline-dark" type="button" onClick={handleAdd}>
            <AddIcon />
          </button> 
        }
          
        </div>
      </div>
      <div>
        <div className="list-group mt-5">
          {
            todos.map((elem)=>{
                return <List key={elem.id} id={elem.id} text={elem.text} deleteItem={handleDelete} updateItem={handleUpdate}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Todo;
