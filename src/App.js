import './App.css';
import Events from './Events';

const components = {
  events: Events
}

function App({component,url}) {
  const Comp = components[component];
  return <Comp url={url} />;
}

export default App;
