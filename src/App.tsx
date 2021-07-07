import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
