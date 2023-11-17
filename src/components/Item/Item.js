import { Link } from 'react-router-dom';
import './Item.css';
export function Item({ id, title, description, price, onShowDetails }) {
  return (
    <div className="item" key={id}>
      <section className="section-left">
        <label className="title">{title}</label>
        <p className="description">{description}</p>
        <label className="price">{price} $</label>
      </section>

      <button className="button-details" onClick={e => onShowDetails(id)}>
        <Link to={`/details/${id}`} className="button-details">
          Show details
        </Link>
      </button>
    </div>
  );
}
