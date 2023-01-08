import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { ActionCreators, State } from './state';

const App = () => {
    const dispatch = useDispatch();

    const { depositMoney, withrawMoney, bankruptMoney } = bindActionCreators(
        ActionCreators,
        dispatch
    );
    const bankAmount = useSelector((state: State) => state.bank);

    return (
        <div className='App'>
            <h1>{bankAmount}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withrawMoney(500)}>Withdraw</button>
            <button onClick={() => bankruptMoney()}>Bankrupt</button>
        </div>
    );
};

export default App;
