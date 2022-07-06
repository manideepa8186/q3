import logo from './logo.svg';
import './App.css';
import {test} from "./test/tests"
function App() {
  const a=test();
  console.log(a)
  return (
    <div className="App">
      {
        a.map((e)=>
        e.map((e1)=>
        <div style={{marginBottom:"2%"}}>
                {e1}
        </div>)
        )
      }
    </div>
  );
}

export default App;
