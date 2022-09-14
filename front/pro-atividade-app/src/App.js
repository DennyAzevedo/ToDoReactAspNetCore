import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente'
import ClienteForm from './pages/clientes/ClienteForm';
import Home from './pages/home/Home'


export default function App() {

	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/cliente/lista' component={Cliente} />
			<Route path='/cliente/detalhe' component={ClienteForm} />
			<Route path='/cliente/detalhe/:id' component={ClienteForm} />
			<Route path='/atividade/lista' component={Atividade} />
		</Switch>
	);
}
