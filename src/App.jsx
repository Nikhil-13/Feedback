import './App.css'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import About from './pages/About'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { Route, Routes } from 'react-router-dom'
import AboutButton from './components/AboutButton'
// import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
	// console.count()
	const [feedback, setFeedback] = useState(FeedbackData)
	// const [localData, handleLocalData] = useLocalStorage(key, value)

	const handleDelete = (id) => {
		setFeedback(feedback.filter((elem) => elem.id != id))
	}

	const handleUpdate = (id) => {
		feedback.forEach((elem) => {
			if (elem.id === id) {
				console.log(elem)
			}
		})
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
		console.log(newFeedback)
	}

	return (
		<>
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
								<FeedbackList
									feedback={feedback}
									handleDelete={handleDelete}
									handleUpdate={handleUpdate}
								/>
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
