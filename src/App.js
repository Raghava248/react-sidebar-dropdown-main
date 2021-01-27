import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Cart from './pages/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
     
      <Sidebar />
      <div className = "container">
        <Cards/>
      </div>
     
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path='/cart' exact component={ Cart } />
        
      </Switch>
    </Router>
  );
}

export default App;
