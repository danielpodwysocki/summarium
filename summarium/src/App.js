import './App.css';
import Header from './Header.js';
import Statuses from './Statuses';
import React, { useState, useEffect } from 'react';

function load_config(mock = false){
  // todo: implement this, for now returning a mock config
  let mock_config = {
    "statuses":[
      {
        "name": "my_mock_status",
        "url": "http://localhost:3000/tests/mock_exporter.json"
      },
      {
        "name": "seconds_exporter",
        "url": "http://127.0.0.1:8000/api/v1/clock"
      }

    ]
  }
  return mock_config
}

function App() {
  /*
  Each status is an object with the following fields:
    - title str() - the title of the status
    - bullet_points - an array containing dicts with the following keys:
        - key str()- name of the bullet point (for example "latency")
        - value str() - value to be displayed (for example 100ms)
  */
  
  const config = load_config()
  config.statuses.forEach(
    (status) => console.log(status.name, status.url)
  )
  

  return (
    <div className="App">
      <Header></Header>
      <Statuses status_configs={config.statuses}></Statuses>
    </div>
  );
}

export default App;
