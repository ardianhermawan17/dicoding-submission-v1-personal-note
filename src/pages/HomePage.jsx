import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/home/NoteList';

function HomePage({ notes = [], keyword, onRefreshBothNotes }) {
	const datas = notes.filter((note) =>
		note.title
			.toString()
			.toLowerCase()
			.includes(keyword.toString().toLowerCase())
	);

	return (
		<div>
			<NoteList notes={datas} onRefreshNotes={onRefreshBothNotes} />
		</div>
	);
}

HomePage.propTypes = {
	keyword: PropTypes.string.isRequired,
	onRefreshBothNotes: PropTypes.func.isRequired,
};

export default HomePage;
