import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const handleDelete = () => {}
	return (
		<>
			<Header></Header>
			<div className='container col-6'>
				<FeedbackStats feedback={feedback}></FeedbackStats>
				<FeedbackList feedback={feedback} handleDelete={handleDelete}></FeedbackList>
			</div>
		</>
	)
}

export default App
