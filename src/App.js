import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import StudentDetails from './components/StudentDetails';
const App = () => {
  return (
    <div className="App">
      <Navbar />
        <div className="routings">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />  
              </Route>
              <Route path="/create">
                <Create />  
              </Route>
              <Route path="/students/:id">
                <StudentDetails />  
              </Route>
            </Switch>
          </Router>
        </div>
      <Footer />
    </div>
  );
}
export default App;
