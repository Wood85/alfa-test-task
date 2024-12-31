import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeartIcon } from "../../assets/images/HeartIcon";
import type IProduct from "../../interfaces/Product";
import styles from "./ProductDetailsPage.module.css"

function ProductDetailsPage() {

	const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

	const initialStateProduct = { id: 1, title: "", description: "", isLiked: false, price: 1, images: []};

	const [product, setProduct] = useState<IProduct>(initialStateProduct);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
			const fetchProducts = async () => {
				try {
					setLoading(true);
					const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
					if (!response.ok) {
						throw new Error("Failed to fetch products");
					}
					const data = await response.json();
					setProduct(data);
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
    <div className={styles.page}>
      <h1 className={styles.title}>{product.title}</h1>
			<div className={styles.container}>
			  <div className={styles.img_container}>
			    <img className={styles.img} src={product.images[0]}/>
					{product.isLiked && 
					(<div className={styles.like}>
						<HeartIcon
                className={styles.heart_icon}
              />
					</div>)}
			  </div>
			  <div className={styles.info}>
			    <div className={styles.description}>{product.description}</div>
			    <div className={styles.price}>Price: {product.price}$</div>
			  </div>
			</div>
      <button className={styles.btn} onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductDetailsPage;