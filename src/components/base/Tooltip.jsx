import React from 'react';

function Tooltip({ children, text }) {
	return (
		<span className='group relative'>
			<span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black dark:bg-white px-2 py-1 text-white dark:text-black opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black dark:before:border-t-white before:content-[''] group-hover:opacity-100">
				{text}
			</span>

			{children}
		</span>
	);
}

export default Tooltip;
