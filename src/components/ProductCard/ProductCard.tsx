import { Link } from 'react-router-dom';
import IProduct from '../../interfaces/Product';
import styles from "./ProductCard.module.css";

function ProductCard(props: IProduct) {
  const { id, title, price, images} = props;
  return (
		<li className={styles.card}>
			<Link className={styles.card_container} to={`${id}`}>
			  <div className={styles.product}>
			    <div className={styles.img_wrap}>
			      <img className={styles.img} src={images[0]} alt={title} />
			    </div>
			    <h3 className={styles.title}>{title}</h3>
			  </div>
			  <div className={styles.price}>{price}$</div>
		  </Link>	
    </li>
  );
};

export default ProductCard

