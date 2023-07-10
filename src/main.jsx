import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FeedbackProvider } from './context/FeedbackContext'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FeedbackProvider>
			<Router>
				<App />
			</Router>
		</FeedbackProvider>
	</React.StrictMode>
)
