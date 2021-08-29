//import logo from '../assets/logo.svg';
import '../css/App.css';
import AdminLoginComponent from './adminLogin/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Dashboard from './adminDashboard/index.js';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/adminLogin" component={AdminLoginComponent} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>

    
    </BrowserRouter>
  );
}

export default App;
