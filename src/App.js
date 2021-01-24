import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DashboardHome from './container/Dashboard/DashboardHome';
import SideBar from './component/SideBar/SideBar';
import Dashboard from './container/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
