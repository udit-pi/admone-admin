import React, { Fragment } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'; // Import Bootstrap components
import Clients from './pages/clients/Clients';
import Taskboard from "./pages/taskdashboard/taskboard";
import Activelog from "./pages/activitylog/activelog";
import Pipeline from "./pages/pipeline/pipeline";
import Clientdetailsinfo from './pages/clients/ClientDetails_Info';
import Login from "./pages/auth/login";
import ClientActivedetail from './pages/clients/ClientActivedetail';


const App = () => {
  return (
    <Router>
    <Fragment>
      <Routes>
              <Route path="/" element={<Taskboard />} />
              <Route path="/activelog" element={<Activelog />} />           
              <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/clientdetailsinfo" element={<Clientdetailsinfo/>} />
              <Route path="/clientActivedetail" element={<ClientActivedetail/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </Fragment>
      </Router>
  );
};

export default App;
