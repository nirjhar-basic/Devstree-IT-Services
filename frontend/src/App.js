import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Startopl from './components/startopl';

function App() {
  return (
    <Router>
   
<Routes>
<Route path="/" element={<Startopl />}></Route>
</Routes>
   
  
    </Router>
  );
}

export default App;
