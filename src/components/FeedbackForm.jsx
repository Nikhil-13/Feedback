function FeedbackForm() {
	return (
		<>
			<form>
				<h2>Your Feedback is much appreciated</h2>
				<div className='review-content'>
					<input type='text' name='review' id='review' placeholder='Write your review' />
					<button type='submit'>Submit</button>
				</div>
			</form>
		</>
	)
}

export default FeedbackForm
