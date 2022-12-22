import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./redux/store";

function App() {
  return (
    <div>
      <Counter1 />
      <hr />
      <Counter2 />
    </div>
  );
}

function Counter1() {
  let dispatch = useDispatch();
  let { userAccount } = useSelector((state) => state);

  return (
    <div>
      <h1>Counter 1 - Amount {userAccount.amount}</h1>
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(200))}
      />
    </div>
  );
}

function Counter2() {
  let dispatch = useDispatch();
  let { userAccount } = useSelector((state) => state);

  return (
    <div>
      <h1>Counter 2 - Amount {userAccount.amount}</h1>
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(100))}
      />

      <input
        type="button"
        value="Withdraw"
        onClick={() => dispatch(withdraw(50))}
      />
    </div>
  );
}

export default App;
