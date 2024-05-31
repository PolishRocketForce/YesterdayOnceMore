import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PromodoTimer() {
    return (
        <View>
            <Text>PromodoTimer</Text>
        </View>
    );
}

// import React, { useState, useEffect } from 'react';

// const PomodoroTimer = () => {
//   const [inputMinutes, setInputMinutes] = useState('');
//   const [secondsRemaining, setSecondsRemaining] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning && secondsRemaining > 0) {
//       timer = setInterval(() => {
//         setSecondsRemaining(seconds => seconds - 1);
//       }, 1000);
//     } else if (secondsRemaining === 0 && isRunning) {
//       alert('Time is up!');
//       setIsRunning(false);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, secondsRemaining]);

//   const handleStart = () => {
//     const seconds = parseInt(inputMinutes, 10) * 60;
//     setSecondsRemaining(seconds);
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setSecondsRemaining(0);
//     setInputMinutes('');
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Pomodoro Timer</h1>
//       <div>
//         <input
//           type="number"
//           value={inputMinutes}
//           onChange={(e) => setInputMinutes(e.target.value)}
//           placeholder="Enter minutes"
//           disabled={isRunning}
//           style={styles.input}
//         />
//         <button onClick={handleStart} disabled={isRunning || !inputMinutes} style={styles.button}>
//           Start
//         </button>
//         <button onClick={handleStop} disabled={!isRunning} style={styles.button}>
//           Stop
//         </button>
//         <button onClick={handleReset} style={styles.button}>
//           Reset
//         </button>
//       </div>
//       <div style={styles.timer}>
//         {formatTime(secondsRemaining)}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '16px',
//     marginRight: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     margin: '5px',
//     cursor: 'pointer',
//   },
//   timer: {
//     marginTop: '20px',
//     fontSize: '48px',
//   },
// };

// export default PomodoroTimer;
