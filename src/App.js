import './App.css';
import Header from './Header';
import Worker from './Worker';
import perso from './images/perso.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Worker/>
      <div className='footer'>
          <img src={perso} alt="" />
        </div>
    </div>
  );
}

export default App;
