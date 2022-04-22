import './App.css';
import Home from './components/Home'
import SearchPage from './components/SearchPage';
import  Signup from './components/signUp'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path='/SignupPage' element={<Signup />}/>
    
      </Routes>
   
    </div>
  );
}

export default App;
