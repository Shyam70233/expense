import React from 'react';
import Header from './comp/Header';
import Balance from './comp/Balance';
import IncomeExpenses from './comp/IncomeExpenses';
import TrasectionList from './comp/TrasectionList';
import AddTransection from './comp/AddTransection';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TrasectionList />
          <AddTransection />
      </div>
    </div>
  );
}

export default App;
