
import { useContext } from 'react'
import MathContext    from '../context'

export default function MathCardNumCubed() {
	function numCubed(number : number) {
		return Math.pow(number, 3);
	}
  const {num} = useContext(MathContext);
	return (
		<li className="list-group-item flex-grow-1 bg-dark-green text-white text-center">{num}³ = {numCubed(num)}</li>
	);
};
