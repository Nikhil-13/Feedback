import Card from './shared/Card'
import PropTypes from 'prop-types'
function FeedbackItem({ item, handleDelete }) {
	return (
		<>
			<div className='feedback-item'>
				<Card item={item} handleDelete={handleDelete(item.id)}></Card>
			</div>
		</>
	)
}

export default FeedbackItem
