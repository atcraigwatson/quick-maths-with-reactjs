
import { useContext } from 'react'

export default function MathCardNumSquareRoot() {

  const num = useContext(MathContext);

	function numSquareRoot(number: 0) {
		return Math.sqrt(number).toFixed(2);
	}

	return (
		<li className="list-group-item flex-grow-1 bg-dark-green text-white text-center">√{num} = {numSquareRoot(num)}</li>
	);
  
};
