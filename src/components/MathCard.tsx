import MathCardNumSquared        from './MathCardNumSquared'
import MathCardNumCubed          from './MathCardNumCubed'
import MathCardNumSquareRoot     from './MathCardNumSquareRoot'
import MathCardNumTimesTableItem from './MathCardNumTimesTableItem'
import MathCardFooter            from './MathCardFooter'

export default function MathCardBody() {
	return (
		<section className="results bg-dark-green p-3 mx-md-auto mt-md-3">
      <h3 className="display-5 text-white mb-3">Results</h3>
			<ul className="list-group list-group-horizontal justify-content-between mb-3">
				<MathCardNumSquared />
				<MathCardNumCubed />
				<MathCardNumSquareRoot />
			</ul>
			<MathCardNumTimesTableItem />
      <MathCardFooter />
    </section>
	);
};