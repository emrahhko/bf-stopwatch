export const updateTime = (data) => {
    data.milliseconds += 10;
    if (data.milliseconds === 1000) {
        data.milliseconds = 0;
        data.seconds += 1;
    }

    if (data.seconds === 60) {
        data.seconds = 0;
        data.minutes += 1;
    }

    if (data.minutes === 60) {
        data.minutes = 0;
    }

    return data;
};
