import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/product/${productId}`); // Assuming the endpoint is /product/:productId
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.size}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
