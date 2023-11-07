import './app.css'
import Contato from './components/contato/Contato'

function App() {

  return (
    <>
      <div id='principal-container'>

        <div id='text-and-add'>
          <h1 id='text-principal'>Contatos</h1>
          <button>Adicionar contato</button>
        </div>

        <div id='contatos-box'>
          <div id='tags-contatos'>
            <span>Nome</span>
            <span>Número</span>
            <span>E-mail</span>
            <span>Opções</span>
          </div>

          <div id='contatos'>
            <Contato name='teste' number='teste' email='teste'/>
            <Contato name='teste' number='teste' email='teste'/>
            <Contato name='teste' number='teste' email='teste'/>
            <Contato name='teste' number='teste' email='teste'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
