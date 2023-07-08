import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<div id='header'>
				<Link to='/'>
					<h1>Feedback</h1>
				</Link>
			</div>
		</>
	)
}

export default Header
