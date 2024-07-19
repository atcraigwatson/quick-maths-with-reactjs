import { createContext } from "react";

type MathContextType = {
  num: number,
  setNum: React.Dispatch<React.SetStateAction<number>>,
};

const MathContext = createContext<MathContextType>({
  num: 1,
  setNum: () => {},
});

export default MathContext
