import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setProducts, toggleFavorite, deleteProduct, setLoading } from "../../store/reducers/productsSlice";
import { useNavigate } from "react-router";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { products, favorites, isLoading, currentPage, itemsPerPage } = useAppSelector((state) => state.products);

	const [filter, setFilter] = useState<"all" | "favorites">("all");

	useEffect(() => {
		if (products.length === 0) {
			dispatch(setLoading(true));
      const fetchProducts = async () => {
				const response = await fetch("https://api.escuelajs.co/api/v1/products");
				const data = await response.json();
				dispatch(setProducts(data));
			};
			fetchProducts();
			dispatch(setLoading(false));
		} 
  }, [dispatch, products.length]);

	const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

	const filteredProducts =
    filter === "favorites"
      ? currentItems.filter((product) => favorites.includes(product.id))
      : currentItems;

	if (isLoading) {
		return <div className={styles.spinner}><Spinner /></div>;
	}

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products</h1>
			<div className={styles.btns}>
        <button className={styles.btn} onClick={() => setFilter("all")}>All</button>
        <button className={styles.btn} onClick={() => setFilter("favorites")}>Favorites</button>
				<button className={styles.btn} onClick={() => navigate("/create-product")}>Create Product</button>
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
						onToggleLike={() => dispatch(toggleFavorite(product.id))}
            onDelete={() => dispatch(deleteProduct(product.id))}
					/>
        ))}
      </ul>
			<Pagination/>
    </div>
  );
}

export default ProductsPage;