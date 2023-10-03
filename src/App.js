import Words from './components/Words';
import Input from './components/Input';
import Result from './components/Result';
import { useSelector } from 'react-redux';

function App() {
  const { finished } = useSelector((state) => state.type);

  return (
    <div className="App">
      <div className='type-area'>
        <Words />
      </div>
      <div className='input--area'>
        <Input />
      </div>
      {
        finished && <Result />
      }
    </div>
  );
}

export default App;
