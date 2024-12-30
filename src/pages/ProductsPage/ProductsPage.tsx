import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import type IProduct from "../../interfaces/Product";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
	const [filter, setFilter] = useState<"all" | "favorites">("all");

	const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=6&limit=10");
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

	const toggleLike = (id: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isLiked: !product.isLiked } : product
      )
    );
  };

	const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

	const filteredProducts = filter === "favorites" ? products.filter((product) => product.isLiked) : products;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products</h1>
			<div className={styles.btns}>
        <button className={styles.btn} onClick={() => setFilter("all")}>All</button>
        <button className={styles.btn} onClick={() => setFilter("favorites")}>Favorites</button>
      </div>
      <ul className={styles.list}>
        {filteredProducts.map((product) => (
					<ProductCard
					  key={product.id}
						id={product.id}
					  title={product.title}
						price={product.price}
						images={product.images}
						description={product.description}
						isLiked={product.isLiked}
						onToggleLike={toggleLike}
            onDelete={deleteProduct}
            onNavigate={(id) => navigate(`/products/${id}`)}
					/>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;