import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutButton() {
	return (
		<>
			<div className='link-btn'>
				<Link to='/about'>
					<FaQuestion size={25} />
				</Link>
			</div>
		</>
	)
}

export default AboutButton
