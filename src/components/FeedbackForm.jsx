import { useContext, useState, useEffect } from 'react'
import RatingStar from './RatingStar'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const [text, setText] = useState('')
	const [btn, disableBtn] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState()

	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setText(feedbackEdit.item.feedbackText)
			setRating(feedbackEdit.item.rating)
			disableBtn(false)
		}
	}, [feedbackEdit])

	const passText = (e) => {
		if (text === '') {
			disableBtn(true)
		} else if (text.trim().length < 9) {
			setMessage('Must exceed 10 characters')
			disableBtn(true)
		} else if (rating === undefined || rating === null) {
			setMessage('Please Select a rating')
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

		if (feedbackEdit.edit === true) {
			updateFeedback(feedbackEdit.item.id, newFeedaback)
		} else {
			addFeedback(newFeedaback)
		}
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
