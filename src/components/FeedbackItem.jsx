import Card from './shared/Card'
function FeedbackItem({ item, handleDelete, handleUpdate }) {
	return (
		<>
			<div className='feedback-item'>
				<Card item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
