function FeedbackItem(item) {
	return (
		<>
			<div className='feedback-item'>
				<div className='card'>
					<div className='card-body'>
						<div className='rating-badge' id='rating'>
							{item.item.rating}
						</div>
						<p className='card-text'>{item.item.feedbackText}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeedbackItem
