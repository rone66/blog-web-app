
import './App.css';
import Login from './components/account/Login';
import Dataprovider from './context/Dataprovider';

function App() {
  return (
    <div className="App" style={{marginTop:"20px"}}>
      <Dataprovider>
      <Login/>
      </Dataprovider>
      
    </div>
  );
}

export default App;
