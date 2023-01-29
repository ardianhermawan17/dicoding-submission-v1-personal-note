import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { MdGTranslate } from 'react-icons/md';

export default function LocaleSwitcher() {
	const LOCALE_LOCAL_STORAGE = window.localStorage.getItem('locale');
	const LOCALE = useMemo(
		() => JSON.parse(LOCALE_LOCAL_STORAGE),
		[LOCALE_LOCAL_STORAGE]
	);
	const reactIconStyling = useMemo(() => ({
		size: '32px',
		className: 'text-gray-900 dark:text-white',
	}));
	const { i18n } = useTranslation();

	function toggleLocale() {
		const NEW_LOCALE = LOCALE === 'id' ? 'en' : 'id';
		window.localStorage.setItem('locale', JSON.stringify(NEW_LOCALE));
		i18n.changeLanguage(NEW_LOCALE);
	}

	return (
		<button type='button' className='mx-4'>
			<IconContext.Provider value={reactIconStyling}>
				<MdGTranslate onClick={() => toggleLocale()} />
			</IconContext.Provider>
		</button>
	);
}
