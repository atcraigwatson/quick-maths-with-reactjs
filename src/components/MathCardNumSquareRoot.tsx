
import { useContext } from 'react'

import MathContext    from '../context'

export default function MathCardNumSquareRoot() {

  const { num } = useContext(MathContext);

	function numSquareRoot(number: number) {
		return Math.sqrt(number).toFixed(2);
	}

	return (
		<li className="list-group-item flex-grow-1 bg-dark-green text-white text-center">√{num} = {numSquareRoot(num)}</li>
	);
  
};
