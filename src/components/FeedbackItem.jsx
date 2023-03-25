import { useState } from 'react'
function FeedbackItem() {
	const [rating, setRating] = useState(1)
	const [text, setText] = useState('Sample text')
	const handleClick = () => {
		setRating((prev) => {
			return prev + 1
		})
		setText()
	}
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='rating' onClick={handleClick}>
						{rating}
					</div>
					<p className='card-text'>{text}</p>
				</div>
			</div>
		</>
	)
}

export default FeedbackItem
