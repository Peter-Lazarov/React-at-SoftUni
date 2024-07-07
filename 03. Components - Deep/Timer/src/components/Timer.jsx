import { useEffect, useState } from "react";

export default function Timer() {
  //debugger

  // //1 on every second pass thru whole component
  // const currentSeconds = new Date().getSeconds();
  // const [time, setTime] = useState(currentSeconds);
  // console.log('Get seconds 1');

    // setTimeout(() => {
  //   console.log('setTimeout 1');
  //   setTime(oldTime => oldTime + 1)
  // }, 1000);




  //2 on every second pass thru setTimeout only
  const [time, setTime] = useState(
    () => {
      const currentSeconds = new Date().getSeconds();
      console.log('Get seconds 2');
      return currentSeconds;
    }
  );

  setTimeout(() => {
    console.log('setTimeout 2');
    setTime(oldTime => oldTime + 1)
  }, 1000);



  // //3 on every second pass thru useEffect and setTimeout only
  // const currentSeconds = new Date().getSeconds();
  // const [time, setTime] = useState(currentSeconds);
  // console.log('Get seconds 3');

  // useEffect(() => {
  //   console.log('useEffect 3');
  //   setTimeout(() => {
  //     setTime(oldTime => oldTime + 1)
  //   }, 1000);
  // });


  return (
    <>
      <h1>Timer</h1>
      <p>{time}</p>
    </>
  );
}



//Example from w3schools
//------------------------------------------------------
// import { useState, useEffect } from "react";

// export default function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },); //runs on every render

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setCount((count) => count + 1);
// //     }, 1000);
// //   }, []); //runs only on first render

//   return <h1>I've rendered {count} times!</h1>;
// }
