import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/index';

function NoteItemDate({ createdAt }) {
	return (
		<div className='ml-3'>
			<span className='block text-gray-400 text-sm'>
				{showFormattedDate(createdAt)}
			</span>
		</div>
	);
}

NoteItemDate.propsTypes = {
	createdAt: PropTypes.string.isRequired,
};

export default NoteItemDate;