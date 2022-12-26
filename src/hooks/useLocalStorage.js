import { useState } from 'react';

export default function useLocalStorage(keyName, defaultValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = localStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value);
			}
			localStorage.setItem(keyName, JSON.stringify(defaultValue));
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue = (newValue) => {
		try {
			localStorage.setItem(keyName, JSON.stringify(defaultValue));
		} catch (err) {
			console.error(err);
		}
		setStoredValue(newValue);
	};

	return [storedValue, setValue];
}