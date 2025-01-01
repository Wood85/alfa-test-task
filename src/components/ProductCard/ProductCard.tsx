import IProduct from "../../interfaces/Product";
import { HeartIcon } from "../../assets/images/HeartIcon";
import { TrashIcon } from "../../assets/images/TrashIcon";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

interface ProductCardProps extends IProduct {
  onToggleLike: () => void;
  onDelete: () => void;
}

function ProductCard({
  id,
  title,
  price,
  images,
  isLiked,
  onToggleLike,
  onDelete
}: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <li className={styles.card}>
      <div className={styles.card_container} onClick={handleCardClick}>
        <div className={styles.product}>
          <div className={styles.container}>
            <div className={styles.img_wrap}>
              <img className={styles.img} src={images[0]} alt={title} />
            </div>
            <div
              className={styles.heart_container}
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike();
              }}
            >
              <HeartIcon
                className={
                  isLiked ? `${styles.heart_icon} ${styles.favorites}` : `${styles.heart_icon}`
                }
              />
            </div>
            <div
              className={styles.trash_container}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <TrashIcon className={styles.trash_icon} />
            </div>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </li>
  );
}

export default ProductCard;
