export default class TimeUtil {
    static startTime = new Date('2021-04-18 14:20:00').getTime();

    static isPassed(minutes){
        if(minutes === -1){
            return true;
        }
        const inMils = minutes * 60 * 1000;
        const now = new Date().getTime();
        console.error(TimeUtil.startTime, inMils, now);
        if(TimeUtil.startTime + inMils < now){
            return true;
        }
        return false;
    }

}
