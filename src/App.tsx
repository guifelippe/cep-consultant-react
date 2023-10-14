import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  useEffect(() => {
    const userPrefersDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(userPrefersDarkMode);
  }, []);

  const consultarCEP = async () => {
    try {
      const response = await axios.get(`http://localhost:4567/cep/${cep}`);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao consultar o CEP:', error);
    }
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'App'}>
      <h1>Consultor de CEP</h1>
      <div>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className={darkMode ? 'dark-input' : 'input-cep'} 
        />
        <button onClick={consultarCEP}>Consultar</button>
      </div>
      {data && (
        <div className="result">
          <h2>Resultado:</h2>
          <p><strong>CEP:</strong> {data.cep}</p>
          <p><strong>Logradouro:</strong> {data.logradouro}</p>
          <p><strong>Complemento:</strong> {data.complemento}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade}</p>
          <p><strong>Estado:</strong> {data.uf}</p>
        </div>
      )}
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Noturno'}
      </button>
    </div>
  );
}

export default App;