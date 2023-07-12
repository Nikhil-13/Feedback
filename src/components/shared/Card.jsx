import { FaTimes, FaEdit } from 'react-icons/fa'
function Card({ item, handleDelete, handleUpdate }) {
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='rating-badge' id='rating'>
						{item.rating}
					</div>
					<div className='buttons'>
						<button
							className='btn'
							aria-label='edit'
							onClick={() => handleUpdate(item.id)}>
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
