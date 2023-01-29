import React from 'react';
import PropTypes from 'prop-types';
import ArchiveNoteList from '../components/archive/ArchiveNoteList';

function ArchivePage({ archive = [], keyword, onRefreshBothNotes }) {
	const datas = archive.filter((note) =>
		note.title
			.toString()
			.toLowerCase()
			.includes(keyword.toString().toLowerCase())
	);

	return (
		<div>
			<ArchiveNoteList notes={datas} onRefreshNotes={onRefreshBothNotes} />
		</div>
	);
}

ArchivePage.propTypes = {
	keyword: PropTypes.string.isRequired,
	onRefreshBothNotes: PropTypes.func.isRequired,
};

export default ArchivePage;
