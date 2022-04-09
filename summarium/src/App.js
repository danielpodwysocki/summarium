import './App.css';
import Header from './Header.js';
import Statuses from './Statuses';

function App() {
  /*
  Each status is an object with the following fields:
    - title str() - the title of the status
    - bullet_points - an array containing dicts with the following keys:
        - key str()- name of the bullet point (for example "latency")
        - value str() - value to be displayed (for example 100ms)
  */
  let statuses = [
    {
      "title": "My test status",
      "bullet_points": [{'key': 'ping', 'value':'100ms'}, {'key':'happy_days', 'value': 'True'}]
    },
    {
      "title": "My other status",
      "bullet_points": [{'key': 'ping', 'value':'200ms'}, {'key':'happy_days', 'value': 'Of course!'}]
    }
  ];
  return (
    <div className="App">
      <Header></Header>
      <Statuses statuses={statuses}></Statuses>
    </div>
  );
}

export default App;
