import { useState } from 'react'

function useLocalStorage(key, initialValue) {
	const [storageValue, setStoreageValue] = useState(() =>
		getLocalStorageValue(key, initialValue)
	)

	const setValue = (value) => {}
	return [storageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
	const localStorageItem = localStorage.getItem(key)
	return localStorageItem ? JSON.parse(localStorageItem) : initialValue
}

export default useLocalStorage
