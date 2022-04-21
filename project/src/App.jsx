import './App.css';
import Home from './components/Home'
import SearchPage from './components/SearchPage';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
      
     
    </div>
  );
}

export default App;
