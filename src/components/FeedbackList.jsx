import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete, handleUpdate }) {
	const { feedback } = useContext(FeedbackContext)

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
