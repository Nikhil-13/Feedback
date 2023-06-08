import { useState } from 'react'
import RatingStar from './RatingStar'
import PropTypes from 'prop-types'

function FeedbackForm({ handleSubmit }) {
	const [text, setText] = useState('')
	const [btn, disableBtn] = useState(true)
	const [message, setMessage] = useState('true')
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
	return (
		<>
			<form>
				<h2>Your Feedback is much appreciated</h2>
				<RatingStar></RatingStar>
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
}
