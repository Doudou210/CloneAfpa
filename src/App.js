import './App.css';
import { Router, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Home}/>
      </Router>
    </div>
  );
}

export default App;
