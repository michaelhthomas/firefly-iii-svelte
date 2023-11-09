export interface ColorRangeInfo {
	colorStart: number;
	colorEnd: number;
	useEndAsStart: boolean;
}

export type D3ColorScale = (t: number) => string;

function calculatePoint(
	i: number,
	intervalSize: number,
	colorRangeInfo: ColorRangeInfo
) {
	const { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
	return useEndAsStart ? colorEnd - i * intervalSize : colorStart + i * intervalSize;
}

export function interpolateColors(
	dataLength: number,
	colorScale: D3ColorScale,
	colorRangeInfo?: Partial<ColorRangeInfo>
) {
	const { colorStart = 0, colorEnd = 1, useEndAsStart = false } = colorRangeInfo ?? {};
	const colorRange = colorEnd - colorStart;
	const intervalSize = colorRange / dataLength;
	let i, colorPoint;
	const colorArray = [];

	for (i = 0; i < dataLength; i++) {
		colorPoint = calculatePoint(i, intervalSize, {
			colorStart,
			colorEnd,
			useEndAsStart
		});
		colorArray.push(colorScale(colorPoint));
	}

	return colorArray;
}
