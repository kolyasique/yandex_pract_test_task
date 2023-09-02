import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import AboutMePage from './pages/AboutMePage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/aboutme" element={<AboutMePage />}></Route>
      <Route path="/task" element={<TaskPage />}></Route>
     </Routes>
    </div>
  );
}

export default App;
