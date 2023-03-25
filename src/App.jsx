import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'

function App() {
	const [feedback, setFeedback] = useState()
	return (
		<>
			<Header></Header>
			<div className='container'>
				<div className='row'>
					<div className='col-4'>
						<FeedbackItem FeedbackData></FeedbackItem>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
