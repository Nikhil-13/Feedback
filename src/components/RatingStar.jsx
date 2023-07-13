import { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingStar({ select }) {
	const [selected, setSelected] = useState()
	const { feedbackEdit } = useContext(FeedbackContext)

	useEffect(() => {
		setSelected(feedbackEdit.item.rating)
	}, [feedbackEdit])
	const handleChange = (e) => {
		setSelected(+e.currentTarget.value)
		select(+e.currentTarget.value)
	}

	return (
		<div className='rating'>
			<input
				type='radio'
				id='star5'
				name='rating'
				value='5'
				onChange={handleChange}
				checked={selected === 5}
			/>
			<label htmlFor='star5' title='5 stars'></label>
			<input
				type='radio'
				id='star4'
				name='rating'
				value='4'
				onChange={handleChange}
				checked={selected === 4}
			/>
			<label htmlFor='star4' title='4 stars'></label>
			<input
				type='radio'
				id='star3'
				name='rating'
				value='3'
				onChange={handleChange}
				checked={selected === 3}
			/>
			<label htmlFor='star3' title='3 stars'></label>
			<input
				type='radio'
				id='star2'
				name='rating'
				value='2'
				onChange={handleChange}
				checked={selected === 2}
			/>
			<label htmlFor='star2' title='2 stars'></label>
			<input
				type='radio'
				id='star1'
				name='rating'
				value='1'
				onChange={handleChange}
				checked={selected === 1}
			/>
			<label htmlFor='star1' title='1 star'></label>
		</div>
	)
}

export default RatingStar
