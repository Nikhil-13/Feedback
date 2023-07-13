import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ item }) {
	const { handleDelete } = useContext(FeedbackContext)
	return (
		<>
			<div className='feedback-item'>
				<Card item={item} handleDelete={handleDelete}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
