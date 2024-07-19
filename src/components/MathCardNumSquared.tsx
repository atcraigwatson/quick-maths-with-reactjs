
import { useContext } from 'react'
import MathContext from '../contexts/MathContext'

export default function MathCardNumSquared() {
	function numSquared(number: 0) {
		return Math.pow(number, 2);
	}
  const { num } = useContext(MathContext);
	return (
		<li className="list-group-item flex-grow-1 bg-dark-green text-white text-center">{num}² = {numSquared(num)} </li>
	);
};
