import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		console.log('no feedback')
	}

	return (
		<>
			{feedback.map((item) => (
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={handleDelete}></FeedbackItem>
			))}
		</>
	)
}

export default FeedbackList
