import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	return (
		<>
			<Header></Header>
			<div className='container'>
				<FeedbackItem></FeedbackItem>
				<FeedbackList feedback={feedback}></FeedbackList>
			</div>
		</>
	)
}

export default App

