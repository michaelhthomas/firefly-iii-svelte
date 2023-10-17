export function downloadBlob(blob: Blob, fileName?: string) {
	const a = document.createElement('a');
	a.href = URL.createObjectURL(blob);
	if (fileName) a.setAttribute('download', fileName);
	a.click();
}
