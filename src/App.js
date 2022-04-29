
import classes from './App.module.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
    <Wrapper/>
    <div >
      <ul className= {classes.box}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
