import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Resources from './Components/Pages/Resources';
import News from './Components/Pages/News';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/Explore' exact component={Explore}/>
        <Route path='/Resources' exact component={Resources}/>
        <Route path='/News' exact component={News}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
