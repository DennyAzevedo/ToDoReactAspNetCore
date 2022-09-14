import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import TitlePage from '../../components/TilePage'

export default function ClienteForm() {
	let history = useHistory()

	return (
		<>
			<TitlePage title='Cliente Detalhes'>
				<Button
					variant='outline-secondary'
					onClick={() => history.goBack()}
				>
					<i className='fas fa-arrow-left me-2'></i>
					Voltar
				</Button>
			</TitlePage>
			<div>

			</div>
		</>
	)
}