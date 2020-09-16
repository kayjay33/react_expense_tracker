import React, { useContext } from 'react'
import { Transaction } from './Transaction'


import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); // this basically pulls in our dummy data to the component using the global context in GlobalState file

    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))}
        </ul>
        </>
    )
}
