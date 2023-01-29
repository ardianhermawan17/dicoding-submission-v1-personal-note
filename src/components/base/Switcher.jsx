import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher({ theme, onChangeTheme }) {
	function toggleDarkMode() {
		onChangeTheme();
	}

	return (
		<DarkModeSwitch
			checked={theme === 'dark'}
			onChange={() => toggleDarkMode()}
			size={40}
		/>
	);
}
