import React ,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { additems, dlteall, dlteitems } from "./action";


const Todo = () =>{

   

   const [state, setState] = useState("");
   const list = useSelector((state) => state.todoreducers.list);
   const Dispatch = useDispatch();
  



    return(
        <>
        <div className="main_container">
            <div style={{textAlign : 'center'}}>
        <u><h1 className="heading">TO-DO APP</h1></u>
        <input style={{color : 'yellow', border : 'solid 1px', textDecorationColor : 'yellow', fontSize : '25px' }} type = "text" placeholder ="Enter your List" 
            value = {state} 
            onChange={(e)=>setState(e.target.value)}
        />
        <button style={{color : 'yellow', border : 'solid'}}
        onClick = {()=>Dispatch(additems(state),setState(''))}>+</button>
        
        <br/>
        <br/>

        {
            list.map((elem)=>{
                return (
                 <div key = {elem.id}>
                <h2>{elem.data}<button className="btn_plus" 
        onClick = {()=>Dispatch(dlteitems(elem.id))}>-</button></h2>
        </div>
                )
            })
        }
    
       
        <br/> <br/>

            <button style={{color : 'yellow', border : 'solid'}}
            onClick = {()=>Dispatch(dlteall())}>Delete All</button>
            </div>
            </div>
        </>
    );
}

export default Todo; 
