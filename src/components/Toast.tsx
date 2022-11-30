import { FC } from "react";

type props = {
  message?: string;
  undo?: Function;
};

export const Toast: FC<props> = ({
  message = `I'm a toast`,
  undo,
}): JSX.Element => {
  return (
    <div className="flex bg-black h-14 py-1 my-2 bottom-0 left-0">
      <span className="text-white/70">{message}</span>
      {undo && <span onClick={() => undo()}> {undo.name} </span>}
    </div>
  );
};
