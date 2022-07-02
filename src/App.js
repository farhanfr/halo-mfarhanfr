import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { HomePage } from './pages/home';
import { ListProject, ProjectPage } from './pages/project';
import './App.css'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detailproject/:id" component={ProjectPage} />
          <Route path="/listproject" component={ListProject} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
