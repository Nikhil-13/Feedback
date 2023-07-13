import { useContext, useState } from 'react'
import RatingStar from './RatingStar'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const [text, setText] = useState('')
	const [btn, disableBtn] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState()

	const { addFeedback } = useContext(FeedbackContext)

	const passText = (e) => {
		if (text === '') {
			disableBtn(true)
		} else if (text.length < 9) {
			setMessage('Must exceed 10 characters')
			disableBtn(true)
		} else {
			setMessage(null)
			disableBtn(false)
		}
		setText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const newFeedaback = {
			feedbackText: text,
			rating: rating,
		}
		addFeedback(newFeedaback)
		setText('')
		disableBtn(true)
		setRating()
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2>Your Feedback is much appreciated</h2>
				<RatingStar
					select={function (rating) {
						setRating(rating)
					}}></RatingStar>
				<div className='review-content'>
					<input
						type='text'
						onChange={passText}
						name='review'
						id='review'
						placeholder='Write your review'
						value={text}
					/>
					<button type='submit' disabled={btn}>
						Submit
					</button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</>
	)
}

export default FeedbackForm

FeedbackForm.propTypes = {
	text: PropTypes.string,
	rating: PropTypes.number,
}
