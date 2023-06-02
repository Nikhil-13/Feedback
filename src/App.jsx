import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	return (
		<>
			<Header></Header>
			<div className='container col-12  col-sm-10 col-md-6 col-lg-7'>
				<FeedbackForm></FeedbackForm>
				<FeedbackStats feedback={feedback}></FeedbackStats>
				<FeedbackList feedback={feedback} handleDelete={handleDelete}></FeedbackList>
			</div>
		</>
	)
}

export default App
