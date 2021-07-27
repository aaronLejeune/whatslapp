import LeftBlock  from './components/left-block/Main'
import RightBlock  from './components/right-block/Main'
import CenterBlock  from './components/center-block/Main'


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <LeftBlock />
        <CenterBlock />
        <RightBlock />
      </div>
    </div>
  );
}

export default App;
