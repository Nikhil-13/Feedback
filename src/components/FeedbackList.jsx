import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		console.log('no feedback')
	}

	return (
		<>
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item}></FeedbackItem>
			))}
		</>
	)
}

export default FeedbackList
