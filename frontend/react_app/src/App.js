import './App.css';
import Feed from './components/Feed';
import NaviBar from './components/NaviBar';

function App() {
  return (
    <div>
      <header>
        <NaviBar/>
      </header>

      <Feed/>
      <Feed/>
    </div>
  );
}

export default App;
