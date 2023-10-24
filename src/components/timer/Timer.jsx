import React, {useState, useEffect} from "react";
import "./Timer.css";
function getTimeLeft(endTime) {
  const totalSeconds = (new Date(endTime) - new Date()) / 1000;
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor(totalSeconds / (60 * 60)) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  return {days, hours, minutes, seconds};
}
function Timer() {
  const endTime = new Date("July 10, 2023 17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime));
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  // <div className='timer'>
  //   <div className='timer-core-cover'>

  //   <div className='timer__days timer-core'>
  //     <div className='timer__days-value'>{timeLeft.days}</div>
  //     <div className='timer__days-label'>Days</div>
  //   </div>
  //   </div>
  //   <div className='timer__hours timer-core'>
  //     <div className='timer__hours-value'>{timeLeft.hours}</div>
  //     <div className='timer__hours-label'>Hours</div>
  //   </div>
  //   <div className='timer__minutes timer-core'>
  //     <div className='timer__minutes-value'>{timeLeft.minutes}</div>
  //     <div className='timer__minutes-label'>Minutes</div>
  //   </div>
  //   <div className='timer__seconds timer-core'>
  //     <div className='timer__seconds-value'>{timeLeft.seconds}</div>
  //     <div className='timer__seconds-label'>Seconds</div>
  //   </div>

  // </div>
  return (
    <div className="time">
      <div className="timer-body">
        {screenWidth > 450 ? (
          <>
            {/* <div className="timer">
              <div className="hour">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </div>
              <div className="time-label">Days</div>
            </div>
            <div className="timer">
              <div className="separator">:</div>
            </div>
            <div className="timer">
              <div className="hour">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </div>
              <div className="time-label">Hours</div>
            </div>

            <div className="timer">
              <div className="separator">:</div>
            </div>

            <div className="timer timer-mar">
              <div className="minute">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </div>
              <div className="time-label">
                {window.innerWidth < 992 ? "Mins" : "Minutes"}
              </div>
            </div>
            <div className="timer">
              <div className="separator">:</div>
            </div>
            <div className="timer timer-mar">
              <div className="second">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </div>
              <div className="time-label">
                {window.innerWidth < 992 ? "Secs" : "Seconds"}
              </div>
            </div> */}

            {/* after-hackathon-end */}
            <div className="timer">Hackathon is officially over !</div>
          </>
        ) : (
          <>
            {/* <div className="column_cut_450">
              <div className="row_cut_450">
                <div className="timer">
                  <div className="hour">
                    {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                  </div>
                  <div className="time-label">Days</div>
                </div>

                <div className="timer">
                  <div className="separator">:</div>
                </div>

                <div className="timer">
                  <div className="hour">
                    {timeLeft.hours < 10
                      ? `0${timeLeft.hours}`
                      : timeLeft.hours}
                  </div>
                  <div className="time-label">Hours</div>
                </div>
              </div>

              <div className="row_cut_450">
                <div className="timer timer-mar">
                  <div className="minute">
                    {timeLeft.minutes < 10
                      ? `0${timeLeft.minutes}`
                      : timeLeft.minutes}
                  </div>
                  <div className="time-label">
                    {window.innerWidth < 992 ? "Mins" : "Minutes"}
                  </div>
                </div>

                <div className="timer">
                  <div className="separator">:</div>
                </div>

                <div className="timer timer-mar">
                  <div className="second">
                    {timeLeft.seconds < 10
                      ? `0${timeLeft.seconds}`
                      : timeLeft.seconds}
                  </div>
                  <div className="time-label">
                    {window.innerWidth < 992 ? "Secs" : "Seconds"}
                  </div>
                </div>
              </div>
            </div> */}

            {/* after-hackathon-end */}
            <div className="timer">Hackathon is officially over !</div>
          </>
        )}
      </div>
    </div>
  );
  // const deadline = new Date("2023-04-08T20:00:00").getTime();
  //      const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0
  // });
  // const [flip, setFlip] = useState({
  //   days: false,
  //   hours: false,
  //   minutes: false,
  //   seconds: false
  // });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const currentTime = Date.now();
  //     const difference = deadline - currentTime;

  //     if (difference <= 0) {
  //       clearInterval(intervalId);
  //       return;
  //     }

  //     const newTimeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60)
  //     };

  //     if (timeLeft.days !== newTimeLeft.days) {
  //       setFlip({ ...flip, days: true });
  //     } else if (timeLeft.hours !== newTimeLeft.hours) {
  //       setFlip({ ...flip, hours: true });
  //     } else if (timeLeft.minutes !== newTimeLeft.minutes) {
  //       setFlip({ ...flip, minutes: true });
  //     } else if (timeLeft.seconds !== newTimeLeft.seconds) {
  //       setFlip({ ...flip, seconds: true });
  //     }

  //     setTimeLeft(newTimeLeft);

  //     setTimeout(() => {
  //       setFlip({
  //         days: false,
  //         hours: false,
  //         minutes: false,
  //         seconds: false
  //       });
  //     }, 600);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [deadline, timeLeft, flip]);

  // return (
  //   <div className="countdown-timer">
  //     <div className={`countdown-timer__card ${flip.days ? "flip" : ""}`}>
  //       <div className="countdown-timer__front">
  //         <div className="countdown-timer__number">{timeLeft.days}</div>
  //         <div className="countdown-timer__label">Days</div>
  //       </div>
  //       <div className="countdown-timer__back">
  //         <div className="countdown-timer__number">{timeLeft.days}</div>
  //         <div className="countdown-timer__label">Days</div>
  //       </div>
  //     </div>
  //     <div className={`countdown-timer__card ${flip.hours ? "flip" : ""}`}>
  //       <div className="countdown-timer__front">
  //         <div className="countdown-timer__number">{timeLeft.hours}</div>
  //         <div className="countdown-timer__label">Hours</div>
  //       </div>
  //       <div className="countdown-timer__back">
  //         <div className="countdown-timer__number">{timeLeft.hours}</div>
  //         <div className="countdown-timer__label">Hours</div>
  //       </div>
  //     </div>
  //     <div className={`countdown-timer__card ${flip.minutes ? "flip" : ""}`}>
  //       <div className="countdown-timer__front">
  //         <div className="countdown-timer__number">{timeLeft.minutes}</div>
  //         <div className="countdown-timer__label">Minutes</div>
  //       </div>
  //       <div className="countdown-timer__back">
  //         <div className="countdown-timer__number">{timeLeft.minutes}</div>
  //         <div className="countdown-timer__label">Minutes</div>
  //       </div>
  //     </div>
  //     <div className={`countdown-timer__card ${flip.seconds ? "flip" : ""}`}>
  //       <div className="countdown-timer__front">
  //         <div className="countdown-timer__number">{timeLeft.seconds}</div>
  //         <div className="countdown-timer__label">Seconds</div>
  //       </div>
  //       <div className="countdown-timer__back">
  //         <div className="countdown-timer__number">{timeLeft.seconds}</div>
  //         <div className="countdown-timer__label">Seconds</div>
  //       </div>
  //     </div>
  //   </div>
}
export default Timer;
