
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login'
import Register from './Auth/Register';
import Profile from './Pages/Profile';


function App() {
  return (
    <div className='App'>
      <Routes >
      <Route path="/sss" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Profile />}></Route>
      </Routes>

</div>
  );
}

export default App;
