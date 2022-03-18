import React from 'react';
import TodoLists from './TodoLists';
import {useState,useEffect} from 'react';
import axios from "axios";
import "./indextodo.css";

// function App (){

    const App1 = () =>{
        
    const [todos,setTodos]=useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((result)=>{
            setTodos(result.data)
        });
    }, []);

    return (
        <>
        <h1 className = "Heading"> TO DO LIST FROM API</h1>
        <h2 className= "Heading2">Checklist Data</h2>
<TodoLists todos ={todos}/>
        </>
    );
}
export default App1;