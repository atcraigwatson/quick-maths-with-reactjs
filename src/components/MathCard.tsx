
import { useState } from 'react'

import MathCardHeader from './MathCardHeader'
import MathCardBody   from './MathCardBody'
import MathCardFooter from './MathCardFooter'

import MathContext    from '../context'

const MathCard = () => {
  const [num, setNum] = useState<MathContextType>(1);
  return (
		<div className="card bg-dark-green text-white shadow-lg">
      <MathContext.Provider value={{ num, setNum }}>
        <MathCardHeader />
        <MathCardBody />
        <MathCardFooter />
      </MathContext.Provider>
		</div>
  );
};

export default MathCard;
