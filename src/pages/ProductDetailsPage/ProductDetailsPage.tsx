import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { HeartIcon } from "../../assets/images/HeartIcon";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = useAppSelector((state) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img className={styles.img} src={product.images[0]} />
          {product.isLiked && (
            <div className={styles.like}>
              <HeartIcon className={styles.heart_icon} />
            </div>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.price}>Price: {product.price}$</div>
        </div>
      </div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
