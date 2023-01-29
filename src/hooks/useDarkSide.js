import { useEffect } from 'react';

export default function useDarkSide() {
	function theme() {
		const defaultValue = 'light';
		try {
			const valueTheme = window.localStorage.getItem('theme');
			if (valueTheme) {
				return JSON.parse(valueTheme);
			}
			window.localStorage.setItem('theme', JSON.stringify(defaultValue));
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	}

	const colorTheme = theme() === 'dark' ? 'light' : 'dark';

	function setTheme() {
		const valueTheme = theme() === 'light' ? 'dark' : 'light';
		try {
			window.localStorage.setItem('theme', valueTheme);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme());
	}, [theme()]);

	return [theme, setTheme];
}
