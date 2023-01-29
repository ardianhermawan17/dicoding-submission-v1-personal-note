/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../base/FormField';

function CreateNote({ title, body, onHandleChange, onSaveNote }) {
	return (
		<div className='flex flex-col  items-center justify-around w-full h-auto p-4  bg-primary-600 rounded-xl'>
			<form
				onSubmit={onSaveNote}
				className='flex flex-col mt-2 items-center justify-between w-11/12 max-w-[600px] '
			>
				<div className='flex flex-col w-full md:flex-row'>
					<FormField
						maxLength={12}
						value={title}
						onHandleChange={(event) => onHandleChange(event, 'title')}
						type='text'
						name='title'
						placeholder='title'
						className='ml-0 mr-0 md:mr-2 md:w-2/5 h-[40px]'
					/>
				</div>
				<textarea
					value={body}
					onChange={(event) => onHandleChange(event, 'body')}
					className='p-3 my-3 mx-4 placeholder:font-hand placeholder:text-2xl w-full text-lg bg-gray-50 dark:bg-black  focus:border-indigo-600 text-gray-500 dark:text-white roboto-regular  rounded-lg h-[200px] shadow-lg focus:outline-none'
					placeholder='Enter your message...'
				/>
				<button
					type='submit'
					className='p-4 mx-2 rounded-lg bg-indigo-600 text-white'
				>
					Send
				</button>
			</form>
		</div>
	);
}

CreateNote.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	onHandleChange: PropTypes.func.isRequired,
	onSaveNote: PropTypes.func.isRequired,
};

export default CreateNote;
