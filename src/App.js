import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Folder from './Pages/Folder';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/folder/:id' element={<Folder />} />
    </Routes>
  );
}

export default App;

