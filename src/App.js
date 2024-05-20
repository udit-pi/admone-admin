import './assets/sass/style.scss'; // Import SCSS styles
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'; // Import Bootstrap components
import Clients from './pages/clients/Clients';
import Taskboard from "./pages/taskdashboard/taskboard";
import Activelog from "./pages/activitylog/activelog";
import Pipeline from "./pages/pipeline/pipeline";
import Clientdetailsinfo from './pages/clients/ClientDetails_Info';
import Login from "./pages/loginpage/login";

import "./App.css"
import Header from './components/Header';

const App = () => {
  return (
    <div className="">

      <Router>
        <div className="app">  

        <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Taskboard />} />
              <Route path="/activelog" element={<Activelog />} />           
              <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/clientdetailsinfo" element={<Clientdetailsinfo/>} />
              {/* <Route path="/login" element={<Login/>} /> */}


        
            </Routes>
          </div>
        </div>
      </Router>

      <Login/>



      {/* <Clients/> */}


    </div>
  );
};

export default App;
