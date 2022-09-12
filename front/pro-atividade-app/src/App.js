import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente'
import Home from './pages/home/Home'

export default function App() {

	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/clientes' component={Cliente} />
			<Route path='/atividades' component={Atividade} />
		</Switch>
	);
}
