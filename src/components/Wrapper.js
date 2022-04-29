import { useRef, useState } from "react";
import Counter from "./Counter";
import Card from "../card/Card";
import classes from "./Wrapper.module.css";

const Wrapper = () => {
  const [inputValue, setInputValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const input = useRef();

  const inputHandler = () => {
    setInputValue(input.current.value);
  };

  const startButtonHandler = () => {
    if (isStart === true) {
      setInputValue(0);
      setToggle((prev) => !prev);
    }
    setIsStart(true);
  };

  const stopButtonHandler = () => {
    setIsStart(false);
  };

  const deleteButtonHandler = () => {
    setInputValue(0);
    setIsStart(false);
    setToggle((prev) => !prev);
  };

  return (
    <Card>
      <input
        className={classes.input}
        type="number"
        defaultValue={0}
        ref={input}
        onBlur={inputHandler}
      />
      <Counter value={inputValue} isStart={isStart} toggle={toggle} />
      <div className={classes.placement}>
        <button
          className={classes.button}
          type="button"
          onClick={startButtonHandler}
        >
          Start
        </button>

        <button
          className={classes.button}
          type="button"
          onClick={stopButtonHandler}
        >
          Stop
        </button>
        
        <button
          className={classes.button}
          type="button"
          onClick={deleteButtonHandler}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default Wrapper;
