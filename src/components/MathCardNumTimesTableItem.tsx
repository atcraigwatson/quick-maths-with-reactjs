
import { useContext } from 'react'
import MathContext    from '../context'
import { JSX } from 'react/jsx-runtime';

export default function MathCardNumTimesTableItem() {

  const { num } = useContext(MathContext);
  const timesTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let timesTableList: JSX.Element[] = [];
  
  timesTable.forEach((times, index) => {
    timesTableList.push(<li key={index} className="list-group-item bg-dark-green text-white">{times} X {num} = {num * times}</li>);
  });
  
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
