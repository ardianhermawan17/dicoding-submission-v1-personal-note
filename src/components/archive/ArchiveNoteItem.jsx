import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiBookOpen, FiTrash } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { IconContext } from 'react-icons';
import ArchiveNoteItemImage from './ArchiveNoteImage';
import ArchiveNoteItemDate from './ArchiveNoteItemDate';
import ArchiveNoteItemBody from './ArchiveNoteItemBody';
import { unarchiveNote, deleteNote } from '../../utils/local-data';
import Tooltip from '../base/Tooltip';

// eslint-disable-next-line object-curly-newline
function ArchiveNoteItem({ id, title, img, body, createdAt, onRefreshNotes }) {
	const reactIconStyling = useMemo(() => ({ size: '32px' }));

	function onUnArchiveNote(noteId) {
		unarchiveNote(noteId);
		onRefreshNotes();
		toast.success('Successfully archived');
	}

	function onDeleteNote(noteId) {
		deleteNote(noteId);
		onRefreshNotes();
		toast.success('Successfully deleted');
	}

	return (
		<article className='flex flex-col justify-between max-w-md min-w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 dark:hover:border-cyan-500 hover:shadow-sm'>
			<div>
				<div className='flex items-center mt-2 pt-3 ml-4 mr-2'>
					<ArchiveNoteItemImage imageUrl={img} title={title} />
					<ArchiveNoteItemDate createdAt={createdAt} />
				</div>
				<ArchiveNoteItemBody id={id} title={title} body={body} />
			</div>
			<div className='flex justify-end w-full'>
				<IconContext.Provider value={reactIconStyling}>
					<Tooltip text='Unarchive note'>
						<button
							type='button'
							className='p-4 mx-2 rounded-full text-blue-400'
						>
							<FiBookOpen onClick={() => onUnArchiveNote(id)} />
						</button>
					</Tooltip>
					<Tooltip text='Delete note'>
						<button
							type='button'
							className='p-4 mx-2 rounded-full text-red-400'
						>
							<FiTrash onClick={() => onDeleteNote(id)} />
						</button>
					</Tooltip>
				</IconContext.Provider>
			</div>
		</article>
	);
}

ArchiveNoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	onRefreshNotes: PropTypes.func.isRequired,
};

export default ArchiveNoteItem;
