import './App.css';
import Evento from './components/evento';
import Form from './components/Form';
function App() {

  const nome = "luana"
  return(
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    </div>
    
  )
}

export default App;
