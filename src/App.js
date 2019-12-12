import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import UploadJawaban from './pages/UploadJawaban';
import ManageAccount from './pages/ManageAccount';
import Praktikum from './pages/Praktikum';
import InputAbsen from './pages/InputAbsen';
import Menu from './pages/Menu';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path='/Download' component={Download} />
            <Route path="/Homepage" component={Homepage} />
            <Route path='/Menu' component={Menu}/>
            <Route path='/UploadJawaban' component={UploadJawaban} />
            <Route path='/ManageAccount' component={ManageAccount} />
            <Route path='/Praktikum' component={Praktikum} />
            <Route path='/InputAbsen' component={InputAbsen} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
