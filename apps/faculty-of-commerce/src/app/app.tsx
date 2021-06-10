import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <div className="app">
        <style jsx>{``}</style>

        <header className="flex">
          <h1>Welcome to faculty-of-commerce!</h1>
        </header>

        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
