import './App.css';
import ArticleFileter from './components/ArticleFilter';

const components = {
  events: ArticleFileter
}

function App({component,url}) {
  const Comp = components[component];
  return <Comp url={url} />;
}

export default App;
