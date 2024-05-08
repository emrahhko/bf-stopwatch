import { dom } from '../dom.js';
import { startHandler } from '../handlers/startHandler.js';

export const startEvent = () => {
    dom.start.addEventListener('click', startHandler);
};
