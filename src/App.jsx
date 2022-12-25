import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balances';
import { AccountDetails } from './Components/AccountDetails';
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';
import TransReducer from './Hooks/TransReducer';
import { TransactionsContext } from './Hooks/TransContext';

import { TransactionsProvider } from './Hooks/TransContext';

function App() {
  return (
        <TransactionsProvider>
          <Header />
          <div className='container'>
            <Balance />
            <AccountDetails />
            <History />
            <AddTransaction />
          </div>
        </TransactionsProvider>
  );
}

export default App;