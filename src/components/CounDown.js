import { Button } from 'antd';
import React, { useEffect, useState } from 'react'

const CounDown = () => {
    const [countdown, setCountdown] = useState(35);
    const [count, setCount] = useState(false);
    console.log("countttt", count);

    useEffect(() => {
        if (count === true && count > 0) {
            var start = setInterval(() => {
                setCountdown(item => item - 1)
            }, 1000);
        } 
        else {
            // clearInterval(start);
            setCountdown(countdown)
        }
        return () => {
            clearInterval(start);
        };
    }, [count]);

    useEffect(() => {
        setCount(false);
      }, [countdown > 0])

    return (
        <>
            <div style={{ display: "grid", justifyContent: "center" }}>
                <br />
                <h2>count : {countdown}</h2>
                <br />
                <br />
                <button onClick={() => setCount(true)}>START</button>
                <br />
                <button onClick={() => setCount(false)}>STOP</button>
                {/* <button onClick={clearHendler}>Clear</button> */}
                <Button type="primary">Primary Button</Button>
            </div>
        </>
    )
}

export default CounDown