
import { useContext } from 'react';

export default function MathCardHeader() {
  const num = useContext(MathContext);
	return (
		<div className="card-header bg-darker-green p-3">
			<h2 className="display-5">Choose Your Number!</h2>
			<input value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
				className="form-control bg-dark-green text-white" 
				type="number" 
				placeholder="Enter your number" 
				aria-label="Enter your number" 
			/>
				<em>You have chosen number {num}.</em>
		</div>
	);
};