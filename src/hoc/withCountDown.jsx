import { useEffect, useState } from "react";

export default function WithCountDown({WrapComponent, timeCountDown}) {
    let [time, setTime] = useState(timeCountDown);
   
    useEffect(() => {
        let timeInterval = setInterval(() => {
            if (time === 0) {
                return clearTimeout(timeInterval);
            }
            setTime(--time);
        }, 1000)
    })

    let day = parseInt(time / 60 / 60 / 24);
    let hours = parseInt((time / 60 / 60) - (day * 24));
    let minute = parseInt((time / 60 - (day * 24 + hours) * 60));
    let second = time % 60;


    let value = {
        day,
        hours,
        minute,
        second
    };
    return <WrapComponent {...value} />
}