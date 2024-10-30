

import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Container from './components/Container';

function App() {

  

  return (
    <div className="App">
      {/* Comentário no JSX */}
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10} />
      <Fragment />
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
  );
}

export default App;
