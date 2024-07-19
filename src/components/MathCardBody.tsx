
import MathCardNumSquared        from './MathCardNumSquared'
import MathCardNumCubed          from './MathCardNumCubed'
import MathCardNumSquareRoot     from './MathCardNumSquareRoot'
import MathCardNumTimesTableItem from './MathCardNumTimesTableItem'

export default function MathCardBody() {
	return (
		<div className="card-body">
			<ul className="list-group list-group-horizontal justify-content-between mb-3">
				<MathCardNumSquared />
				<MathCardNumCubed />
				<MathCardNumSquareRoot />
			</ul>

			<MathCardNumTimesTableItem />
					
		</div>
	);
};