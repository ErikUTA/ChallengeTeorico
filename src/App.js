import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Information from './components/information/information';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">          
          <Route exact path="/" component={Information} />
      </div>
    </Router>
  );
}

export default App;