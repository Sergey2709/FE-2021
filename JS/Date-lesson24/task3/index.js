const MILLISECINDAY = 86400000;
const MILLISECINHOUR = 3600000;
const MILLISECINMINUT = 60000;
const MILLISECINSECOND = 1000;

const getDiff = (startDate, endDate) => {
    let timeStampDiff = 0;
    if (new Date(startDate) > new Date(endDate)) {
        timeStampDiff = new Date(startDate) - new Date(endDate);
    }
     if (new Date(startDate) < new Date(endDate)) {
        timeStampDiff = new Date(endDate) - new Date(startDate);
    }

    const daysDiff = timeStampDiff / MILLISECINDAY;
    const hoursDiff = (timeStampDiff % MILLISECINDAY) / MILLISECINHOUR;
    const minutsDiff = ((timeStampDiff % MILLISECINDAY) % MILLISECINHOUR) / MILLISECINMINUT;
    const secondsDiff =
      (((timeStampDiff % MILLISECINDAY) % MILLISECINHOUR) % MILLISECINMINUT) / MILLISECINSECOND;
    return `${Math.floor(daysDiff)}d ${Math.floor(hoursDiff)}h ${Math.floor(minutsDiff)}m ${Math.floor(secondsDiff)}s`;
};

console.log(getDiff(new Date(), new Date(2021, 5, 12)));