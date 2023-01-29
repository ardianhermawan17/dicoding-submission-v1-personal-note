import React from 'react';
import HomePage from './HomePage';
import ArchivePage from './ArchivePage';
import Header from '../../components/Header';
import { getActiveNotes, getArchivedNotes } from '../../utils/local-data';
import CreatePage from './CreatePage';

class AppPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
			archive: getArchivedNotes(),
			notes: getActiveNotes(),
		};
		this.onChangeKeyword = this.onChangeKeyword.bind(this);
		this.onRefreshBothNotes = this.onRefreshBothNotes.bind(this);
	}

	onRefreshBothNotes() {
		this.setState((prevState) => ({
			...prevState,
			archive: getArchivedNotes(),
			notes: getActiveNotes(),
		}));
	}

	onChangeKeyword(keyword) {
		this.setState((prevState) => ({
			...prevState,
			keyword,
		}));
	}

	render() {
		const { keyword, notes, archive } = this.state;

		return (
			<div>
				<Header keyword={keyword} onChangeKeyword={this.onChangeKeyword} />
				<CreatePage onRefreshBothNotes={this.onRefreshBothNotes} />
				<HomePage
					notes={notes}
					keyword={keyword}
					onRefreshBothNotes={this.onRefreshBothNotes}
				/>
				<ArchivePage
					archive={archive}
					keyword={keyword}
					onRefreshBothNotes={this.onRefreshBothNotes}
				/>
			</div>
		);
	}
}

export default AppPage;
