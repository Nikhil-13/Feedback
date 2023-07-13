import './App.css'
import Header from './components/Header'
import About from './pages/About'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutButton from './components/AboutButton'
import { Route, Routes } from 'react-router-dom'
// import { useContext } from 'react'
// import FeedbackContext from './context/FeedbackContext'
// import FeedbackData from './data/FeedbackData'
// import useLocalStorage from './hooks/useLocalStorage'

function App() {
	// const { feedback, setFeedback } = useContext(FeedbackContext)

	// console.count()
	// const [feedback, setFeedback] = useState(FeedbackData)
	// // useLocalStorage('name', JSON.stringify(feedback))

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
								<FeedbackForm />
								<FeedbackStats />
								<FeedbackList />
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
