import { useState } from 'react'

function FeedbackItem() {
	const [rating, setRating] = useState(1)
	const [text, setText] = useState('lorem')

	return (
		<>
			<div className='feedback-item'>
				<div className='card'>
					<div className='card-body'>
						<div className='rating' id='rating'>
							{rating}
						</div>
						<p className='card-text'>{text}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeedbackItem
