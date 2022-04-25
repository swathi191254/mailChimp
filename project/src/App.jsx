import './App.css';
import Home from './components/Home'
import SearchPage from './components/SearchPage';
import  Signup from './components/signUp'
import SignUpForm from './components/signupForm';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path='/SignupPage' element={<SignUpForm />}/>
        <Route path='/LoginPage' element={<Login />}/>
      </Routes>
      
   
    </div>
  );
}

export default App;
