function savedData(key) {
	const presentData = JSON.parse(localStorage.getItem(key, ''))
}

export default function useLocalStorage(key, value) {
	localStorage.setItem(key, value)
	savedData(key)
}
