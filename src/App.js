import './App.css';
import Main from './components/Main';
import Terms from './components/Terms';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route exact path="/termsandcondition" element={<Terms/>}/>
      {/* <Route exact path="/privacy" element={<Privacy/>}/> */}

      </Routes>
    </Router>
    </div>
  );
}

export default App;
