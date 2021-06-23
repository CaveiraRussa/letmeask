import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

export const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'teste'}>
        <Route path='/' exact component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
