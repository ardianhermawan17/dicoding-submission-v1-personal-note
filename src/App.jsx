import React from 'react';
import BaseToaster from './components/base/BaseToaster';
import AppPage from './pages/AppPage';

function App() {
	return (
		<>
			<BaseToaster />
			<div className='bg-gray-100 dark:bg-neutral-800  pb-24 min-h-screen '>
				<AppPage />
			</div>
		</>
	);
}

export default App;
