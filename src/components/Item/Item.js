import { Link } from 'react-router-dom';
import './Item.css';
export function Item({ id, title }) {
  return (
    <div className="item" key={id}>
      <label className="title">{title}</label>
      <Link to={`/details/${id}`} className="button-details">
        <button className="button-details">Show details</button>
      </Link>
    </div>
  );
}
