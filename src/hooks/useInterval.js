import { useEffect, useRef } from 'react';

// setInterval and hooks don't interact with each other nicely
// state is reset every time, so trying to loop through an array or something
// just isn't possible with a normal `setInterval` and React
// full blog post where `useRef()` implementation was adopted from
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (cb, delay) => {
  const prevCb = useRef();

  useEffect(() => {
    prevCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      prevCb.current();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

export default useInterval;
