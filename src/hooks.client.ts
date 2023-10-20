// Initialize day.js and plugins
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

// Initialize chart.js and plugins
import { Chart, ArcElement, Colors, Tooltip } from 'chart.js';
Chart.register(ArcElement);
Chart.register(Colors);
Chart.register(Tooltip);
