
import { useContext } from 'react'
import MathContext    from '../context'

export default function ListItem() {
  const { num } = useContext(MathContext);
  return (
      <li className="list-group-item bg-dark-green text-white">1 X {num} = {num * 1}</li>
  );
};
