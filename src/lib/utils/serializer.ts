const dateFormat = /^(?<date>\d{4}-\d{2}-\d{2}T.*Z)$/;

function reviver(key: string, value: unknown) {
	if (typeof value === 'string' && dateFormat.test(value)) {
		try {
			const date = value.match(dateFormat)!.groups!.date;
			return new Date(date);
		} catch {
			// if date parsing fails, preserve the string as-is
			return value;
		}
	}

	return value;
}

export function serialize(obj: unknown) {
	return JSON.stringify(obj);
}

export function deserialize(json: string) {
	return JSON.parse(json, reviver);
}
