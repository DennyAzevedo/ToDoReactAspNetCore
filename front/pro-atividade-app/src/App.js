import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';

function App() {
  const [index] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id: 0});

  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;
  };

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();
      if(todasAtividades) {
        setAtividades(todasAtividades);
      }
    };
    getAtividades();
  }, []);

  const addAtividade = async (ativ) => {
    const response = await api.post('atividade', ativ);
    setAtividades([...atividades, response.data]);
  };

  function cancelarAtividade() {
    setAtividade({id: 0});
  }

  const atualizarAtividade = async (ativ) => {
    const response = await api.put(`atividade/${ativ.id}`, ativ);
    const { id } = response.data;
    setAtividades(atividades.map(item => item.id === id ? response.data : item));
    setAtividade({id: 0});
  }

  const deletarAtividade = async (id) => {
    if(await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
    }
  };

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0]);
  }
 
  return (
    <>
      <AtividadeForm 
        atividades={atividades} 
        addAtividade={addAtividade} 
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
      />
      <AtividadeLista 
        atividades={atividades} 
        deletarAtividade={deletarAtividade} 
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
