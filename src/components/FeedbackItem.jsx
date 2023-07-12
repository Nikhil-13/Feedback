import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ item, handleDelete, handleUpdate }) {
	return (
		<>
			<div className='feedback-item'>
				<Card item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
