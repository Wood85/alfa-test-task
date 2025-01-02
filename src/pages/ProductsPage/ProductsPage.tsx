import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  setProducts,
  toggleFavorite,
  deleteProduct,
  setLoading
} from "../../store/reducers/productsSlice";
import { useNavigate } from "react-router";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchInput from "../../components/SearchInput/SearchInput";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products, favorites, isLoading, currentPage, itemsPerPage, searchQuery } = useAppSelector(
    (state) => state.products
  );

  const [filter, setFilter] = useState<"all" | "favorites">("all");

  useEffect(() => {
    if (products.length === 0) {
      dispatch(setLoading(true));
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProducts(data));
      };
      fetchProducts();
      dispatch(setLoading(false));
    }
  }, [dispatch, products.length]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const favoritesProducts =
    filter === "favorites"
      ? currentItems.filter((product) => favorites.includes(product.id))
      : currentItems;

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={styles.btn} onClick={() => setFilter("favorites")}>
          Favorites
        </button>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={() => navigate("/create-product")}>
          Create Product
        </button>
        <SearchInput />
      </div>

      <ul className={styles.list}>
        {favoritesProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            isLiked={product.isLiked}
            onToggleLike={() => dispatch(toggleFavorite(product.id))}
            onDelete={() => dispatch(deleteProduct(product.id))}
          />
        ))}
      </ul>
      <Pagination products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
