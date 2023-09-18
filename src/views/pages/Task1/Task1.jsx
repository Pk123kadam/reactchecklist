import React, { useEffect, useState } from 'react'

function Task1() {
    const [start, setStart] = useState(false)
    const [milli, setMilli] = useState(0)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hr, setHr] = useState(0)
    useEffect(() => {
        let interval;
        if (start) {
            interval = setInterval(() => {
                setMilli(milli + 1)
            }, 10)
        }
        if (milli > 99) {
            setMilli(0)
            setSec(sec + 1)
        }
        if (sec > 59) {
            setSec(0)
            setMin(min + 1)
        }
        if (min > 59) {
            setMin(0)
            setHr(hr + 1)
        }
        return () => {
            clearInterval(interval)
        }
    }, [start, milli])
    return (
        <>
            <div className='text-center' style={{ paddingTop: "200px", fontSize: "50px" }}>
                <button className='btn btn-primary' onClick={() => setStart(!start)} style={{ fontSize: "20px" }}> {start ? "Stop" : "Start"}</button> {hr < 10 ? "0" + hr : hr} : {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec} : {milli < 10 ? "0" + milli :
                    // milli > 99 ? milli.toString().slice(0, 2) : milli
                    milli
                } <button className='btn btn-danger' style={{ fontSize: "20px" }} onClick={() => {
                    setMin(0)
                    setMilli(0)
                    setHr(0)
                    setSec(0)
                    setStart(false)
                }}>Reset</button>
            </div>
        </>

    )
}

export default Task1
