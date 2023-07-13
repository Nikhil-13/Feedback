import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../../context/FeedbackContext'
function Card({ item }) {
	const { handleDelete, editFeedback } = useContext(FeedbackContext)
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='rating-badge' id='rating'>
						{item.rating}
					</div>
					<div className='buttons'>
						<button className='btn' aria-label='edit' onClick={() => editFeedback(item)}>
							<FaEdit></FaEdit>
						</button>
						<button
							className='btn'
							aria-label='delete'
							onClick={() => handleDelete(item.id)}>
							<FaTimes></FaTimes>
						</button>
					</div>
					<p className='card-text'>{item.feedbackText}</p>
				</div>
			</div>
		</>
	)
}

export default Card
