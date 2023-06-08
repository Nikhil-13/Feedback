function FeedbackStats({ feedback }) {
	let sum = 0
	feedback.forEach((element) => {
		sum += element.rating
	})
	let average = (sum / feedback.length).toFixed(1)

	return (
		<>
			<div className='stats'>
				<p>Reviews: {feedback.length}</p>
				<p>Average Rating: {isNaN(average) ? '0' : average}</p>
			</div>
		</>
	)
}

export default FeedbackStats
