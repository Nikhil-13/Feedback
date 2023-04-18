import Card from './shared/Card'
function FeedbackItem({ item }) {
	return (
		<>
			<div className='feedback-item'>
				<Card item={item}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
