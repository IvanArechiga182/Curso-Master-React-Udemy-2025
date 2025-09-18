import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/useLayoutEffect.module.css";
const ExampleUseLayoutEffect = () => {
  const [show, setShow] = useState<boolean>(false);
  const box = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect");
    if (box.current === null) return;
    console.log(box.current.getBoundingClientRect());
    box.current.innerHTML = "Hola soy un mensaje modificado por useEffect";
    box.current.style.color = "black";
  }, [show]);

  return (
    <div>
      <h1>UseLayoutEffect Hook vs UseEffect Hook</h1>
      <button
        onClick={() =>
          setShow((prev) => {
            return !prev;
          })
        }
      >
        Show message
      </button>
      {show && (
        <div className={styles.box} id="box" ref={box}>
          Hola soy un mensaje {show}
        </div>
      )}
    </div>
  );
};

export default ExampleUseLayoutEffect;
