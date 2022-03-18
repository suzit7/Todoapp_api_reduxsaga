import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const voters = [
    "Subrat Regmi",
    "Suzit Paudel"
  ];
  return (
    <div className="App">
    <u><h1 style ={{textAlign : 'center', color: "red"}}>WELCOME TO VOTING SYSTEM</h1></u>
    <br/>
    <br/>
      {user && <h1> Hello, {user.firstName} {user.lastName} </h1>}
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
