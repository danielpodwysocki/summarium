import './App.css';
import Header from './Header.js';
import Statuses from './Statuses';
import React, { useState, useEffect } from 'react';

function load_config(mock = false){
  // todo: implement this, for now returning a mock config
  /*
  This function loads the Summarium configuration
  The config is a json file containing a list of statuses we want to display
  under the "statuses_index" key.
  Each status is an object with the below fields:
    - name str() - display name of the status
    - url str() - URL returning a JSON - this is where we get the status data
    - format str() - a format to display the data in. Currently supported:
         - "bullet_list" - displays KV pairs as bullet points
         - "table" - displays iterables in a table
         - "value" - captures a single value, 
         either status_root or force_value is required for it
    - width int() - optional, defaults to 1, defines how many columns should
    the status take
    - status_root str() - dotted path to where we should begin processing
    the data This can be for example metrics.latency.office1 - it will look 
    start looking for values to render underneath that path. If not set,
    the whole JSON will be processed into a status.
    - constant_value object() - takes in a JSON object, can be used instead of
    url

    You can also create subpages that can be navigated to from the top bar.
    Those are created as below under the "statuses_subpages" key:
    ```
    "statuses_subpages":
    [
      "name": "subpage_name",
      "statuses":
      [
        // This follows the same structure as statuses_index
      ]
    ]

    ```
  */
  let mock_config = {
    "statuses_index":[
      {
        "name": "my_mock_status",
        "url": "http://localhost:3000/tests/mock_exporter.json"
      },
      {
        "name": "seconds_exporter",
        "url": "http://127.0.0.1:8000/api/v1/clock",
        "format": "bullet_list",
        "status_root": ""

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
