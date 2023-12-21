export function htmlEscape(str: string) {
	return str
		.replace(/&/g, '&amp')
		.replace(/'/g, '&apos')
		.replace(/"/g, '&quot')
		.replace(/>/g, '&gt')
		.replace(/</g, '&lt');
}
