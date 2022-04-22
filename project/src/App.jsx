import './App.css';
import Home from './components/Home'
import SearchPage from './components/SearchPage';
import  Signup from './components/signUp'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes> */}
      
      <Signup />
     
    </div>
  );
}

export default App;
