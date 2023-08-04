import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Navbar/>

      <Routes>
      <Route element={ <Home/> } path='/' />
      <Route element={ <Home/> } path='home' />
      <Route element={ <Signup/> } path='signup' />
      <Route element={ <Login/> } path='login' />
      <Route element={ <EventHandling/> } path='event' />
      <Route element={ <StateManagement/> } path='state' />
      <Route element={ <TodoList/> } path='todo' />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
