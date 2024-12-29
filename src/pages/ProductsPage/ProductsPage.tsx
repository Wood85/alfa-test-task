import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import type IProduct from "../../interfaces/Product";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul className={styles.list}>
        {products.map((product) => (
					<ProductCard
					  key={product.id}
						id={product.id}
					  title={product.title}
						price={product.price}
						images={product.images}
						description={product.description}
					/>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;