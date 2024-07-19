
import MathCardHeader from './MathCardHeader'
import MathCardBody   from './MathCardBody'
import MathCardFooter from './MathCardFooter'

export default function MathCard() {
  return (
		<div className="card bg-dark-green text-white shadow-lg">
			<MathCardHeader />
			<MathCardBody />
			<MathCardFooter />
		</div>
  );
};