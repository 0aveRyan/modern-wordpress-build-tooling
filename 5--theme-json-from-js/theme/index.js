
const templateParts = [
	{
		name: 'header',
		area: 'header',
	},
	{
		name: 'footer',
		area: 'footer',
	},
];

const customTemplates = [
	{
		name: 'page-no-title',
		title: 'Page (No Title)',
	},
];

const settings = require('./settings');
const styles = require('./styles');

const themeJSON = {
    '$schema': 'https://schemas.wp.org/trunk/theme.json',
    version: 2,
    templateParts,
    customTemplates,
    settings,
    styles,
}

module.exports = themeJSON;