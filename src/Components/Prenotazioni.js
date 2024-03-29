import React, { useState, useEffect } from 'react';

const PrenotazioniComponent = () => {
  const [prenotazioni, setPrenotazioni] = useState([]);

  const readPrenotazioni = () => {
    const storedPrenotazioni = JSON.parse(localStorage.getItem('prenotazioni'));
    if (storedPrenotazioni) {
      setPrenotazioni(storedPrenotazioni);
    }
  };

  useEffect(() => {
    readPrenotazioni();
  }, []);

  const [nuovaPrenotazione, setNuovaPrenotazione] = useState({
    nomeCliente: '',
    numeroPersone: '',
    dataOra: ''
  });
  const [prenotazioneModifica, setPrenotazioneModifica] = useState(null);

  const createPrenotazione = () => {
    setPrenotazioni([...prenotazioni, nuovaPrenotazione]);
    setNuovaPrenotazione({ nomeCliente: '', numeroPersone: '', dataOra: '' });
  };

  const updatePrenotazione = (index, updatedPrenotazione) => {
    const updatedPrenotazioni = [...prenotazioni];
    updatedPrenotazioni[index] = updatedPrenotazione;
    setPrenotazioni(updatedPrenotazioni);
    setPrenotazioneModifica(null);
  };

  const deletePrenotazione = (index) => {
    const updatedPrenotazioni = [...prenotazioni];
    updatedPrenotazioni.splice(index, 1);
    setPrenotazioni(updatedPrenotazioni);
  };

  useEffect(() => {
    localStorage.setItem('prenotazioni', JSON.stringify(prenotazioni));
  }, [prenotazioni]);

  return (
    <div>
      <h1>Prenotazioni</h1>
      <div>
        <input
          type="text"
          value={nuovaPrenotazione.nomeCliente}
          onChange={(e) => setNuovaPrenotazione({ ...nuovaPrenotazione, nomeCliente: e.target.value })}
          placeholder="Nome cliente"
        />
        <input
          type="number"
          value={nuovaPrenotazione.numeroPersone}
          onChange={(e) => setNuovaPrenotazione({ ...nuovaPrenotazione, numeroPersone: e.target.value })}
          placeholder="Numero persone"
        />
        <input
          type="datetime-local"
          value={nuovaPrenotazione.dataOra}
          onChange={(e) => setNuovaPrenotazione({ ...nuovaPrenotazione, dataOra: e.target.value })}
          placeholder="Data e ora"
        />
        <button onClick={prenotazioneModifica ? () => updatePrenotazione(prenotazioneModifica.index, nuovaPrenotazione) : createPrenotazione}>
          {prenotazioneModifica ? 'Aggiorna' : 'Aggiungi Prenotazione'}
        </button>
      </div>

      {prenotazioni.map((prenotazione, index) => (
        <div key={index}>
          <p>Nome cliente: {prenotazione.nomeCliente}</p>
          <p>Numero persone: {prenotazione.numeroPersone}</p>
          <p>Data e ora: {prenotazione.dataOra}</p>
          <button onClick={() => setPrenotazioneModifica({ prenotazione, index })}>Modifica</button>
          <button onClick={() => deletePrenotazione(index)}>Cancella</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PrenotazioniComponent;



