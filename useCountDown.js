import { useEffect, useMemo, useRef, useState } from 'react';

function useCountDown(target) {
  const firstNow = useRef(new Date().getTime());
  const _target = useRef(0);
  if (typeof target === 'undefined') return { d: 0, h: 0, m: 0, s: 0 };

  useMemo(() => {
    if (target.constructor === Date) {
      target = target.getTime();
    } else if (target.constructor === Object) {
      const { d = 0, h = 0, m = 0, s = 0 } = target;
      target = d * 86400 + h * 3600 + m * 60 + s;
      target = target * 1000 + firstNow.current;
    } else if (target.constructor === String) {
      const [d = 0, h = 0, m = 0, s = 0] = target.split(':');
      target = d * 86400 + h * 3600 + m * 60 + parseInt(s);
      target = target * 1000 + firstNow.current;
    } else {
      target = target * 1000 + firstNow.current;
    }
    _target.current = target;
  }, [target]);
  const [time, setTime] = useState(calculateTimeLeft(_target.current));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!finished) {
      setTimeout(function () {
        const newTime = calculateTimeLeft(_target.current);
        if (newTime) {
          setTime(newTime);
        } else {
          setFinished(true);
        }
      }, 1000);
    }
  }, [time.d, time.h, time.m, time.s, finished]);

  return { ...time, finished };
}

function calculateTimeLeft(target) {
  var now = new Date().getTime();
  var distance = target - now;
  if (distance <= 0) return false;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  return { d, h, m, s };
}

export default useCountDown;
