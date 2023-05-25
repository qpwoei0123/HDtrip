import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
