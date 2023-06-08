function RatingStar() {
	// Optional: Preselect a default rating (e.g., 3 stars)

	return (
		<div className='rating'>
			<input type='radio' id='star5' name='rating' value='5' />
			<label htmlFor='star5' title='5 stars'></label>
			<input type='radio' id='star4' name='rating' value='4' />
			<label htmlFor='star4' title='4 stars'></label>
			<input type='radio' id='star3' name='rating' value='3' />
			<label htmlFor='star3' title='3 stars'></label>
			<input type='radio' id='star2' name='rating' value='2' />
			<label htmlFor='star2' title='2 stars'></label>
			<input type='radio' id='star1' name='rating' value='1' />
			<label htmlFor='star1' title='1 star'></label>
		</div>
	)
}

export default RatingStar
