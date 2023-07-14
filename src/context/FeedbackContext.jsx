import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'
// import { useLocalStorage } from '../hooks/useLocalStorage'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData)
	// const [feedback, setFeedback] = useLocalStorage('tasks', FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	const addFeedback = (newFeedback) => {
		if (newFeedback.id == null) {
			newFeedback.id = uuidv4()
			setFeedback([newFeedback, ...feedback])
		} else {
			setFeedback([newFeedback, ...feedback])
		}
	}

	const editFeedback = (item) => {
		setFeedbackEdit({
			item: { id: item.id, rating: item.rating, feedbackText: item.feedbackText },
			edit: true,
		})
	}

	const updateFeedback = (id, updatedFeedItem) => {
		const updatedFeedaback = {
			id: id,
			rating: updatedFeedItem.rating,
			feedbackText: updatedFeedItem.feedbackText,
		}
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...feedback, ...updatedFeedaback } : item
			)
		)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				setFeedback,
				handleDelete,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}
export default FeedbackContext
