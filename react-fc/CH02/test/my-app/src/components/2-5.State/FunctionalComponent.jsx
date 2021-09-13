import React, { useState, useEffect } from 'react';

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date()); // 초기화, 상태

  const tick = () => {
    setDate(new Date()); // 업데이트
  };

  useEffect(() => { // didmount 타이밍
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval); // Unmount 타이밍
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is Functional : {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
