import { ArcElement, Chart, Tooltip } from 'chart.js';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

// Initialize day.js and plugins
dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);
dayjs.extend(quarterOfYear);

// Initialize chart.js and plugins
Chart.register(ArcElement);
Chart.register(Tooltip);
