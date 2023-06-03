
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';
import { List  } from "./pages/list/list";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='/list' element={<List />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
