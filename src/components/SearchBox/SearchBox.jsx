import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
