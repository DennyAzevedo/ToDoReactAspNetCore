import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AtividadeForm from './AtividadeForm';
import AtividadeLista from './AtividadeLista';
import api from '../../api/atividade';
import TitlePage from '../../components/TilePage';

export default function Atividade() {
	const [showAtividadeModal, setShowAtividadeModal] = useState(false);
	const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
	const [atividades, setAtividades] = useState([]);
	const [atividade, setAtividade] = useState({id: 0});
	
	const handleAtividadeModal = () => {
		setShowAtividadeModal(!showAtividadeModal);
	}

	const handleConfirmModal = (id) => {
		if(id !== 0 && id !== undefined) {
			const atividade = atividades.filter(
				atividade => atividade.id === id
			);
			setAtividade(atividade[0]);
		} else {
			setAtividade({id:0});
		}
		setSmShowConfirmModal(!smShowConfirmModal);
	}

	const pegaTodasAtividades = async () => {
		const response = await api.get('atividade');
		return response.data;
	};

	const novaAtividade = () => {
		setAtividade({id: 0});
		handleAtividadeModal();
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
		handleAtividadeModal();
		const response = await api.post('atividade', ativ);
		setAtividades([...atividades, response.data]);
	};

	const cancelarAtividade = () => {
		handleAtividadeModal();
		setAtividade({id: 0});
	};

	const atualizarAtividade = async (ativ) => {
		handleAtividadeModal();
		const response = await api.put(`atividade/${ativ.id}`, ativ);
		const { id } = response.data;
		setAtividades(atividades.map(item => item.id === id ? response.data : item));
		setAtividade({id: 0});
	}

	const deletarAtividade = async (id) => {
		handleConfirmModal(0);
		if(await api.delete(`atividade/${id}`)) {
			const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
			setAtividades([...atividadesFiltradas]);
		}
	};

	const pegarAtividade = (id) => {
		const atividade = atividades.filter(atividade => atividade.id === id);
		setAtividade(atividade[0]);
		handleAtividadeModal();
	};
 
	return (
		<>
			<TitlePage
				title={'Atividade ' + (atividade.id !== 0 ? atividade.id : '')}
			>
				<Button variant="outline-secondary" onClick={novaAtividade}>
					<i className="fas fa-plus"></i>
				</Button>
			</TitlePage>	
			<AtividadeLista 
				atividades={atividades} 
				pegarAtividade={pegarAtividade}
				handleConfirmModal={handleConfirmModal}
			/>
			
			<Modal 
				show={showAtividadeModal} 
				onHide={handleAtividadeModal}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Atividades {atividade.id !== 0 ? atividade.id : ''}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AtividadeForm 
						atividades={atividades} 
						addAtividade={addAtividade} 
						atualizarAtividade={atualizarAtividade}
						cancelarAtividade={cancelarAtividade}
						ativSelecionada={atividade}
					/>
				</Modal.Body>
			</Modal>

			<Modal 
				show={smShowConfirmModal}
				onHide={handleConfirmModal}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Excluindo Atividades{' '} 
						{atividade.id !== 0 ? atividade.id : ''}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Tem certeza que deseja Excluir a Atividade {atividade.id}
				</Modal.Body>
				<Modal.Footer className='d-flex justify-content-between'>
					<button 
						className="btn btn-sm btn-outline-success me-2"
						onClick={() => deletarAtividade(atividade.id)}
					>
						<i className='fas fa-check me-2'></i>
						Sim
					</button>
					<button 
						className="btn btn-sm btn-outline-danger me-2" 
						onClick={() => handleConfirmModal(0)}
					>
						<i className='fas fa-times me-2'></i>
						Não
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
