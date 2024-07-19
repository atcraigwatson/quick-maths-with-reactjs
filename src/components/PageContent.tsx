
import { useState, createContext  } from 'react'

import MathCard from './MathCard';

const MathContext = createContext(0);

export default function PageContent() {
  const [num, setNum] = useState(0);
  return (
    <section className="my-5">
      <MathContext.Provider value={num}>
        <MathCard />
      </MathContext.Provider>
    </section>
  );
};