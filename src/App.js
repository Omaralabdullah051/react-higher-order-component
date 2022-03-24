import './App.css';
import ClickEvent from './components/ClickEvent';
import FocusCounter from './components/FocusCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickEvent></ClickEvent>
      <HoverCounter></HoverCounter>
      <FocusCounter></FocusCounter>
    </div>
  );
}

export default App;
