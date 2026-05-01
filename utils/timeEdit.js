const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const egyptTime = (date)=>{
    return date.toLocaleString("en-GB",{
        timeZone: "Africa/Cairo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true    
    });
};


const getTodayRange = ()=>{
    const start = dayjs().tz("Africa/Cairo").startOf("day").toDate();
    const end = dayjs().tz("Africa/Cairo").endOf("day").toDate();

    return {
        $gte: start,
        $lte: end
    };
}

module.exports = {
    egyptTime,
    getTodayRange
};