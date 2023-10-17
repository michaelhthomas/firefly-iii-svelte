const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function reviver(key: string, value: unknown) {
	if (typeof value === 'string' && dateFormat.test(value)) {
		return new Date(value);
	}

	return value;
}

export function deserialize(json: string) {
	return JSON.parse(json, reviver);
}
