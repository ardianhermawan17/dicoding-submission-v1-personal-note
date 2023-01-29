/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Switcher from './base/Switcher';
import LocaleSwitcher from './base/LocaleSwitcher';
import SearchBar from './base/SearchBar';

// eslint-disable-next-line react/prefer-stateless-function

function Header({ keyword, onChangeKeyword }) {
	const [toggle, setToggle] = useState(false);
	const [theme, setTheme] = useState('light');

	function onHandleToggle(toggleStatus) {
		setToggle(() => toggleStatus);
	}

	useEffect(() => {
		const colorTheme = theme === 'dark' ? 'light' : 'dark';
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
	}, [theme]);

	return (
		<nav className='bg-white dark:bg-black w-full border-b md:border-0 md:static'>
			<div className='justify-between items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
				<div className='flex items-center justify-between py-3 md:py-5 md:block '>
					<button type='button'>
						{theme === 'light' ? (
							<img
								src='https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png'
								width={120}
								height={50}
								alt='Float UI logo'
							/>
						) : (
							<img
								src='https://www.dicoding.id/wp-content/uploads/2020/07/Logo-Dicoding-Putih.png'
								width={120}
								height={50}
								alt='Float UI logo'
							/>
						)}
					</button>
					<div className='md:hidden'>
						<button
							type='button'
							className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border'
							onClick={() => onHandleToggle(!toggle)}
						>
							{toggle ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 fill-current dark:fill-white'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 fill-current dark:fill-white stroke-current dark:stroke-white'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 8h16M4 16h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				<div
					className={`flex-0 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						toggle ? 'block' : 'hidden'
					}`}
				>
					<SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} />
				</div>

				<div
					className={`flex-0 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						toggle ? 'block' : 'hidden'
					}`}
				>
					<div className='flex justify-between md:justify-start md:items-center'>
						<LocaleSwitcher />
						<Switcher
							theme={theme}
							onChangeTheme={() =>
								setTheme(theme === 'light' ? 'dark' : 'light')
							}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

Header.propTypes = {
	keyword: PropTypes.string.isRequired,
	onChangeKeyword: PropTypes.func.isRequired,
};

export default Header;
