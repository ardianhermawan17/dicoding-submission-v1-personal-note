import React from 'react';
import PropTypes from 'prop-types';

function ArchiveNoteItemBody({ title, body }) {
	return (
		<div className='pt-3 ml-4 mr-2 mb-3'>
			<p className='text-xl text-gray-900 dark:text-white dark:hover:text-sky-400 hover:text-sky-400'>
				{title}
			</p>

			<p className='text-gray-400 dark:text-gray-300 text-sm mt-1'>{body}</p>
		</div>
	);
}

ArchiveNoteItemBody.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default ArchiveNoteItemBody;
