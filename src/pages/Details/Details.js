import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Details() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(product => ({ ...product, ...response.data }));
      setIsLoading(false);
    }

    getProduct();
  }, [id]);

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
