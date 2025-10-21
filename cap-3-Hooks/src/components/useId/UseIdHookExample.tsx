import { useId } from "react";

const UseIdHookExample = () => {
  const id = useId();

  console.log(id);

  return (
    <div>
      <h1>UseIdHookExample</h1>
    </div>
  );
};

export default UseIdHookExample;
