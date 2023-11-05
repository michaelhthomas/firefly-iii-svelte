// Initialize day.js and plugins
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(advancedFormat);
dayjs.extend(quarterOfYear);

// Initialize chart.js and plugins
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement);
Chart.register(Tooltip);
