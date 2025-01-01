import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentPage } from "../../store/reducers/productsSlice";
import IProduct from "../../interfaces/Product";

import styles from "./Pagination.module.css";

interface PaginationProps {
  products: IProduct[];
}

const Pagination = ({ products }: PaginationProps) => {
  const dispatch = useAppDispatch();
  const { currentPage, itemsPerPage } = useAppSelector((state) => state.products);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          className={page === currentPage ? `${styles.btn} ${styles.btn_active}` : `${styles.btn}`}
          key={page}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
