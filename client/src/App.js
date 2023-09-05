import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Requête API côté serveur
    axios.get('http://localhost:8080/api/status')
        .then((response) => {
          setStatus(response.data.serverStatus);
          setData(response.data.data);
        })
        .catch((error) => {
          setStatus('Server error');
          console.error(error);
        });
  }, []);

  return (
      <div>
        <h1>État de l'application</h1>
        <p>Server: {status}</p>
        {data && <p>Données: {data.message}</p>}
      </div>
  );
}

export default App;
