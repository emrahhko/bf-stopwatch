import { dom } from '../dom.js';
import { resetHandler } from '../handlers/resetHandler.js';

export const resetEvent = () => {
    dom.reset.addEventListener('click', resetHandler);
};
