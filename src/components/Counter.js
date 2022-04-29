import React, { useCallback, useEffect, useState } from "react";
import classes from './Counter.module.css';

const Counter = (props) => {
  let { value: initialValue } = props;
  const { isStart } = props;
  let { toggle } = props;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(+initialValue);
  }, [initialValue, toggle]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isStart !== false) {
        setValue((prevState) => prevState + 1);
      }
    }, 1400);

    return () => clearTimeout(interval);
  }, [value, isStart]);

  return <h1 className={isStart ? classes.counterAnimation : classes.counter}>{value}</h1>;
};

export default Counter;
