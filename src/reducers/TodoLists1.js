

const TodoLists1=({todos})=>{

    return (
        <ul>
    {todos.map((todo)=>(
        <li type = "1">{todo.title}
    <input type = "checkbox" checked = {todo.completed}/>
        </li>
    ))}
    </ul>
    );

};

export default TodoLists1;