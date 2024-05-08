import { dom } from '../dom.js';
import { stopHandler } from '../handlers/stopHandler.js';

export const stopEvent = () => {
    dom.stop.addEventListener('click', stopHandler);
};
