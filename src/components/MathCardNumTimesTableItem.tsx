
import { useContext } from 'react'
import { JSX }        from 'react/jsx-runtime';

import MathContext    from '../context'

export default function MathCardNumTimesTableItem() {

  const { num } = useContext(MathContext);
  const timesTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let timesTableList: JSX.Element[] = [];
  
	for ( const number of timesTable ) {
		timesTableList.push(<li key={number} className="list-group-item bg-dark-green text-white">{number} X {num} = {num * number}</li>);
	};
  
  if ( num <= 0 ) {
    return ( 
      <ul className="list-group">
        <li className="list-group-item bg-dark-green text-white">We like to stay positve.. Please choose a number higher than 0.</li>
      </ul>
    );
  } else {
    return (
      <ul className="list-group">
        {timesTableList}
      </ul>
    ); 
  }
};
