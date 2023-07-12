import './App.css'
import { v4 as uuidv4 } from 'uuid'
import { useContext, useState } from 'react'
import Header from './components/Header'
import About from './pages/About'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutButton from './components/AboutButton'
// import FeedbackData from './data/FeedbackData'
import { Route, Routes } from 'react-router-dom'
import FeedbackContext from './context/FeedbackContext'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
	// console.count()
	const { feedback, setFeedback } = useContext(FeedbackContext)

	// const [feedback, setFeedback] = useState(FeedbackData)
	// // useLocalStorage('name', JSON.stringify(feedback))
	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
		console.log(newFeedback)
	}
	const handleUpdate = (id) => {
		feedback.forEach((elem) => {
			if (elem.id === id) {
				feedback.forEach((feed) => {
					if (elem.id === feed.id) {
						console.log(feed.feedbackText)
					}
				})
			}
		})
	}
	return (
		<>
			<Header></Header>
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm addFeedback={addFeedback} />
								<FeedbackStats />
								<FeedbackList handleDelete={handleDelete} handleUpdate={handleUpdate} />
								<AboutButton />
							</>
						}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
			</div>
		</>
	)
}

export default App
