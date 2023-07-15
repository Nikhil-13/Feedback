import { useState, useEffect } from 'react'
// import FeedbackData from '../data/FeedbackData'

export function useLocalStorage(key) {
	const [localValue, setlocalValue] = useState(() => {
		const storedValue = JSON.parse(localStorage.getItem(key))
		if (storedValue != null) {
			return storedValue
		} else {
			return []
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(localValue))
	}, [key, localValue])
	return [localValue, setlocalValue]
}
