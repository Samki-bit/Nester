import React, { useEffect, useState } from 'react'

function DigitalClock() {

    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    function getCurrentTime() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
  return (
    <div>
        <div className="flex justify-end items-center ">
            <div className="text-4xl font-bold mt-5 mr-5">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
        </div>
    </div>
  )
}

export default DigitalClock