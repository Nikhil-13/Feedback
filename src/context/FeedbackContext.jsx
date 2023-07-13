import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData)

	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<FeedbackContext.Provider
			value={{ feedback, setFeedback, handleDelete, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	)
}
export default FeedbackContext
