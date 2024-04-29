import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);
    dispatch(changeFilter(inputValue));
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
