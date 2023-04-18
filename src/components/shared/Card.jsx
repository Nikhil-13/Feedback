import { FaTimes } from 'react-icons/fa'
function Card({ item }) {
	console.log(item)
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='rating-badge' id='rating'>
						{item.rating}
					</div>
					<button className='close'>
						<FaTimes></FaTimes>
					</button>
					<p className='card-text'>{item.feedbackText}</p>
				</div>
			</div>
		</>
	)
}

export default Card
