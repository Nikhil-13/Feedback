import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete, handleUpdate }) {
	if (!feedback || feedback.length === 0) {
		document.textContent = 'no feedback'
	}

	return (
		<>
			{feedback.map((item) => (
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}></FeedbackItem>
			))}
		</>
	)
}

export default FeedbackList
