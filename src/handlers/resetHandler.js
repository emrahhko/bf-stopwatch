import { dom } from '../dom.js';
import { data } from '../data.js';
import { updateTimeDom } from '../components/updateTimeDom.js';

export const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
    }

    data.milliseconds = 0;
    data.seconds = 0;
    data.minutes = 0;

    updateTimeDom(dom.time, data);
};
