/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { toast } from 'react-hot-toast';
import CreateNote from '../components/create/CreateNote';
import { addNote } from '../utils/local-data';

class CreatePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onSaveNote = this.onSaveNote.bind(this);
	}

	onHandleChange(event, stateType) {
		this.setState((prevState) => ({
			...prevState,
			[stateType]: event.target.value,
		}));
	}

	onSaveNote(event) {
		event.preventDefault();
		const { onRefreshBothNotes } = this.props;
		const { title, body } = this.state;
		addNote({
			title,
			body,
		});
		this.setState({ title: '', body: '' });
		onRefreshBothNotes();
		toast.success('Successfully added note');
	}

	render() {
		const { title, body } = this.state;

		return (
			<div>
				<CreateNote
					title={title}
					body={body}
					onHandleChange={this.onHandleChange}
					onSaveNote={this.onSaveNote}
				/>
			</div>
		);
	}
}

export default CreatePage;
