import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export function Details() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const product = useSelector(state => state.productsReducer.selectedProduct);

  return (
    <div>
      <h1>Details</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h4>{product.title}</h4>
          <h3>{product.price}</h3>
          <h3>{product.category}</h3>
          <h3>{product.description}</h3>
          <h3>{product.image}</h3>
        </>
      )}
    </div>
  );
}
