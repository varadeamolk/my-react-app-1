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

  let [amount, setAmount] = useState(0);
  let handleInputChange = (e) => {
    amount = parseInt(e.target.value);
    setAmount(amount);
  };

  return (
    <div>
      <h1>Counter 1 - Amount {userAccount.amount}</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(amount))}
      />
    </div>
  );
}

function Counter2() {
  let dispatch = useDispatch();
  let { userAccount } = useSelector((state) => state);

  let [amount, setAmount] = useState(0);
  let handleInputChange = (e) => {
    amount = parseInt(e.target.value);
    setAmount(amount);
  };

  return (
    <div>
      <h1>Counter 2 - Amount {userAccount.amount}</h1>

      <input
        type="number"
        placeholder="Enter amount"
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(amount))}
      />

      <input
        type="button"
        value="Withdraw"
        onClick={() => dispatch(withdraw(amount))}
      />
    </div>
  );
}

export default App;
