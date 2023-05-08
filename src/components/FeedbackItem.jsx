import Card from './shared/Card'
function FeedbackItem({ item, handleDelete }) {
	return (
		<>
			<div className='feedback-item'>
				<Card item={item} handleDelete={handleDelete}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
