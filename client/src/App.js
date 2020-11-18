import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';

import './styles/main.scss';

class App extends React.Component {
  render() {
    const App = () => (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shops/:shopId' component={ShopPage} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
