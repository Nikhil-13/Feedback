import './App.css'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import About from './pages/About'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutButton from './components/AboutButton'

function App() {
	// console.count()
	const [feedback, setFeedback] = useState(FeedbackData)
	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
		console.log(newFeedback)
	}

	return (
		<Router>
			<Header></Header>
			<div className='container col-12  col-sm-10 col-md-6 col-lg-7'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm addFeedback={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={handleDelete} />
								<AboutButton />
							</>
						}></Route>
					<Route path='/about' element={<About />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
