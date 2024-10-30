import './App.css';

// Aula 15 - Implementando o React Router
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// Trocar Switch por Routes
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// --------------------------------------------------------------------------------------------------------

// import { useState } from "react"
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';
//----------------------------------------------------------------------------------------------------------

// import OutraLista from './components/OutraLista';
//----------------------------------------------------------------------------------------------------------

// import Condicional from './components/Condicional';
//----------------------------------------------------------------------------------------------------------

// import Evento from './components/Eventos';
// import Form from './components/Form';
//----------------------------------------------------------------------------------------------------------

// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
//------------------------------------------------------------------------------------------------------------

function App() {

  // const meusItens = ['React', 'Vue', 'Angular']
  // const [nome, setNome] = useState()

  return (
    // Aula 15 - Implementando o React Router

    <Router>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/empresa' element={<Empresa />} />

        <Route path='/contato' element={<Contato />} />

      </Routes>

      <Footer />

    </Router>
    //--------------------------------------------------------------------------------------------------------





    // <div className="App">
    //   {/* <h1>State Lift</h1>
    //   <SeuNome setNome={setNome} />
    //   <Saudacao nome={nome} /> */}


    //   {/* <OutraLista itens={meusItens} />
    //   <OutraLista itens={[]} /> */}


    //   {/* <Condicional /> */}



    //   {/* <Evento numero="1" />
    //   <Evento numero="2" />
    //   <Form /> */}



    //   {/* <Frase />
    //   <SayMyName nome="Matheus" />
    //   <SayMyName nome="João" />
    //   <SayMyName nome={name} />
    //   <Pessoa
    //   nome="Rodrigo"
    //   idade="28"
    //   profissao="Programador"
    //   foto="https://via.placeholder.com/150"
    //   />
    //   <List /> */}
    // </div>
  );
}

export default App;
