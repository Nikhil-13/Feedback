import { FaTimes, FaEdit } from 'react-icons/fa'
function Card({ item, handleDelete }) {
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='rating-badge' id='rating'>
						{item.rating}
					</div>
					<div className='buttons'>
						<button className='btn'>
							<FaEdit></FaEdit>
						</button>
						<button onClick={() => handleDelete(item.id)} className='btn'>
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
