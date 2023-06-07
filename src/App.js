
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
