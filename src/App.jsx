import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header"; // também poderia ficar entre aspas simples
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header 
        brand='Geração Tech'
        description='Sede Bezerra de Menezes'>
          <a href="/#equipe">Equipe</a>
          <NavLink to="/contato">Contato</NavLink>
      </Header>

{/* Aplicando um container para "centralizar" o nosso conteúdo */}
      <main className='container'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/contato' element = {<Contact/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
