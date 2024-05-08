import { updateTimeDom } from '../components/updateTimeDom.js';
import { data } from '../data.js';
import { updateTime } from '../utils/updateTime.js';
import { dom } from '../dom.js';

export const startHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
    }

    data.intervalId = setInterval(() => {
        const newData = updateTime(data);
        updateTimeDom(dom.time, newData);
    }, 10);
};
