import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setSearchQuery } from "./../../store/reducers/productsSlice";

import styles from "./SearchInput.module.css";

function SearchInput() {
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search products..."
      onChange={handleSearchChange}
    />
  );
}

export default SearchInput;
