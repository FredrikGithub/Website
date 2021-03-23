import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'
function App() {
  const [inputFromChild, setInputFromChild] = useState('');
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Form />
        <h1 id="todos">My Todos</h1>
        <Todos />
      </main>
    </div>
  );
}

export default App;
