import { useEffect, useRef, useState } from "react";
import { PiClockCountdownDuotone } from "react-icons/pi"; // TODO: implement this in output

export default function Timer({ startTime }) {
  const [timer, setTimer] = useState("00:00:00");
  const Ref = useRef(null);
  const deadlineInMinutes = localStorage.getItem("time");

  function getCurrentTime(total) {
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, seconds, minutes, hours };
  }

  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    return getCurrentTime(total);
  }

  function timeoString(t) {
    const hours = t.hours;
    const minutes = t.minutes;
    const seconds = t.seconds;
    return (
      (hours > 9 ? hours : "0" + hours) +
      ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds)
    );
  }

  function startTimer(e) {
    let { total, seconds, minutes, hours } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(timeoString({ total, seconds, minutes, hours }));
    }
  }

  function clearTimer(e) {
    // If you adjust it you should also need to adjust the Endtime formula we are about
    // to code next
    const deadl = getDeadTime();
    const deadTime = timeoString(getCurrentTime(deadl - Date.now()));
    setTimer(deadTime);

    // If you try to remove this line the updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  }

  function getDeadTime() {
    let deadline = new Date();

    // This is where you need to adjust if you entend to add more time
    // 60 = 1mins
    deadline.setSeconds(deadline.getSeconds() + deadlineInMinutes * 60);
    return deadline;
  }

  // We can use useEffect so that when the component mount the timer will start as soon as possible
  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Whenever the "startTime" prop get changed,
  // This function will be called
  useEffect(() => {
    clearTimer(getDeadTime());
  }, [startTime]);

  // function checkWinOrLose() {
  //   if (match === 6) {
  //     return "Congratulations! You win!!";
  //   } else {
  //     return "You Lost!";
  //   }
  // }

  return (
    <div className="timer">
      <h3> Count Down: {timer}</h3>
      {/* <h2>
        {timer === "00:00:00" ? checkWinOrLose() : "Count Down: " + timer}
      </h2> */}
    </div>
  );
}
